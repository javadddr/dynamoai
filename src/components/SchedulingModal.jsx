// src/components/SchedulingModal.jsx
import {
  Modal,
  ModalContent,
  Button,
  Avatar,
  Input,
} from "@heroui/react";
import { ChevronLeft, ChevronRight, Clock, Globe, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { isSameDay, isBefore, startOfDay } from "date-fns";
import dayjs from 'dayjs';
import { Calendar } from 'antd';
import logos from "./logo512.png";

// Helper functions for timezone handling
const getUserTimezone = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (error) {
    return "UTC";
  }
};

const convertToBerlinTime = (date, timeString) => {
  // Convert dayjs to Date if needed
  const jsDate = date instanceof dayjs ? date.toDate() : date;
  
  // Parse time string (e.g., "9:00 am")
  const [time, period] = timeString.split(' ');
  const [hoursStr, minutesStr] = time.split(':');
  
  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);
  
  // Convert to 24-hour format
  if (period.toLowerCase() === 'pm' && hours !== 12) {
    hours += 12;
  } else if (period.toLowerCase() === 'am' && hours === 12) {
    hours = 0;
  }
  
  // Create date in user's local timezone
  const userDate = new Date(jsDate);
  userDate.setHours(hours, minutes, 0, 0);
  
  // Convert to Berlin time
  const berlinTime = new Date(userDate.toLocaleString('en-US', {
    timeZone: 'Europe/Berlin'
  }));
  
  // Format Berlin time back to readable string
  const berlinHours = berlinTime.getHours();
  const berlinMinutes = berlinTime.getMinutes();
  const berlinPeriod = berlinHours >= 12 ? 'pm' : 'am';
  const displayHours = berlinHours % 12 || 12;
  
  return {
    time: `${displayHours}:${berlinMinutes.toString().padStart(2, '0')} ${berlinPeriod}`,
    isoString: berlinTime.toISOString(),
    localISOString: userDate.toISOString(),
    userTime: `${hoursStr}:${minutesStr} ${period}`,
  };
};

// Generate time slots (Berlin time)
const timeSlots = Array.from({ length: 17 }, (_, i) => {
  const hour = 9 + Math.floor(i / 2);
  const minute = i % 2 === 0 ? "00" : "30";
  const period = hour >= 12 ? "pm" : "am";
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return `${displayHour}:${minute} ${period}`;
});

export default function SchedulingModal({ isOpen, onOpenChange }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [duration] = useState("30m");
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [responseMeeting, setResponseMeeting] = useState(null);
  
  // State for timezone info
  const [userTimezone, setUserTimezone] = useState("");
  const [convertedTime, setConvertedTime] = useState(null);
  
  // Refs for cleanup
  const successTimeoutRef = useRef(null);
  const resetTimeoutRef = useRef(null);
  
  // Inline errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [timeError, setTimeError] = useState("");

  // Detect user timezone on component mount
  useEffect(() => {
    const detectedTimezone = getUserTimezone();
    setUserTimezone(detectedTimezone);
    console.log("Detected user timezone:", detectedTimezone);
  }, []);

  // Update converted time when selection changes
  useEffect(() => {
    if (selectedDate && selectedTime) {
      const converted = convertToBerlinTime(selectedDate, selectedTime);
      setConvertedTime(converted);
      console.log("Time conversion:", {
        userTimezone,
        userTime: converted.userTime,
        berlinTime: converted.time,
        userISO: converted.localISOString,
        berlinISO: converted.isoString
      });
    }
  }, [selectedDate, selectedTime, userTimezone]);

  // Disable dates before today
  const disabledDate = (current) => {
    if (!current) return false;
    // Convert dayjs to Date for comparison
    const currentDate = current instanceof dayjs ? current.toDate() : current;
    return isBefore(startOfDay(currentDate), startOfDay(new Date()));
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, []);

  const handleSchedule = () => {
    let hasError = false;

    // Reset errors
    setNameError("");
    setEmailError("");
    setTimeError("");

    if (!name.trim()) {
      setNameError("Name is required");
      hasError = true;
    }
    if (!email.trim()) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email");
      hasError = true;
    }
    if (!selectedDate || !selectedTime) {
      setTimeError("Please select a date and time");
      hasError = true;
    }

    if (hasError) return;

    // Convert dayjs to Date for consistent handling
    const dateObj = selectedDate instanceof dayjs ? selectedDate.toDate() : selectedDate;
    
    // Create meeting data with timezone info
    const meetingData = {
      name: name.trim(),
      email: email.trim(),
      date: dateObj,
      time: selectedTime,
      userTimezone,
      berlinTime: convertedTime?.time || null,
      scheduledAt: new Date().toISOString(),
      conversion: convertedTime || null,
    };

    setResponseMeeting(meetingData);
    
    // Log detailed timezone info
    console.log("Meeting scheduled →", meetingData);
    console.log("Timezone details:", {
      detected: userTimezone,
      berlin: "Europe/Berlin",
      userSelected: `${dateObj.toDateString()} ${selectedTime}`,
      convertedToBerlin: convertedTime?.time,
      userISO: convertedTime?.localISOString,
      berlinISO: convertedTime?.isoString
    });

    setIsSuccess(true);
    
    // Clear any existing timeouts
    if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
    if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    
    // Close modal after 2.5 seconds
    successTimeoutRef.current = setTimeout(() => {
      onOpenChange(false);
      
      // Reset form after modal closes
      resetTimeoutRef.current = setTimeout(() => {
        setIsSuccess(false);
        setName("");
        setEmail("");
        setSelectedDate(null);
        setSelectedTime(null);
        setNameError("");
        setEmailError("");
        setTimeError("");
        setConvertedTime(null);
      }, 500);
    }, 250000);
  };
console.log("selectedDate",selectedDate)
  const handleCloseModal = () => {
    // Clear timeouts when manually closing
    if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
    if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    
    // Reset form state
    setIsSuccess(false);
    setName("");
    setEmail("");
    setSelectedDate(null);
    setSelectedTime(null);
    setNameError("");
    setEmailError("");
    setTimeError("");
    setConvertedTime(null);
    
    // Close modal
    onOpenChange(false);
  };

  // Format date for display
  const formatDateForDisplay = (date) => {
    if (!date) return "";
    const dateObj = date instanceof dayjs ? date.toDate() : date;
    return dateObj.toDateString();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange} 
      size="5xl" 
      backdrop="blur"
      hideCloseButton={isSuccess}
    >
      <ModalContent className="max-h-[50vh] dark overflow-hidden rounded-2xl">
        {(onClose) => (
          <>
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-[540px] p-10 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
                <h3 className="text-xl font-semibold mb-3">We will contact you soon!</h3>
                <p className="text-foreground/80 mb-2">
                  Meeting link will be sent to <span className="font-medium">{email}</span>
                </p>
                {convertedTime && selectedDate && (
                  <div className="mt-4 p-3 bg-success/10 rounded-lg text-sm w-lg">
                    <p className="font-medium mb-2 text-lg text-gray-100">Meeting Details:</p>
                    <div className="space-y-1 text-left">
                      <p><span className="text-white">Your timezone:</span> <Button size="sm" color="warning" variant="shadow" className="ml-10 w-[150px]">{userTimezone}</Button></p>
                      <p><span className="text-white">Selected Date:</span> <Button size="sm" color="warning" variant="shadow" className="ml-10.5 w-[150px]">{formatDateForDisplay(selectedDate)}</Button></p>
                      <p><span className="text-white">Your selected time:</span> <Button size="sm" color="warning" variant="shadow" className="ml-3 w-[150px]">{selectedTime}</Button></p>
                     
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex h-[540px]">
                {/* LEFT */}
                <div className="w-1/4 border-r border-border p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <Avatar src={logos} size="md" />
                    <div>
                      <p className="font-medium text-gray-300">Demo Call</p>
                    </div>
                  </div>

                  <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                    Quick sync to explore how we can help your team move faster.
                  </p>

                  {/* Inputs with inline errors */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <Input
                        isRequired
                        label="Name"
                        placeholder="Your name"
                        value={name}
                        onValueChange={(val) => {
                          setName(val);
                          if (val.trim()) setNameError("");
                        }}
                        size="sm"
                        color={nameError ? "danger" : "default"}
                      />
                      {nameError && (
                        <p className="text-danger text-xs mt-1 pl-1">{nameError}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        isRequired
                        label="Email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onValueChange={(val) => {
                          setEmail(val);
                          if (val.trim()) setEmailError("");
                        }}
                        size="sm"
                        color={emailError ? "danger" : "default"}
                      />
                      {emailError && (
                        <p className="text-danger text-xs mt-1 pl-1">{emailError}</p>
                      )}
                    </div>
                    <div className="mt-8 text-gray-300 space-y-0 text-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-foreground/60" />
                      <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-foreground/60" />
                      <span>{userTimezone}</span>
                    </div>
                  </div>
                  </div>

                  {/* Timezone info display */}
                


                  {/* Optional: show time error here if you want */}
                  {timeError && (
                    <p className="text-danger text-xs mb-4 -mt-2 pl-1">{timeError}</p>
                  )}

               
                </div>

                {/* MIDDLE — Calendar */}
                <div className="w-1/2 border-r border-border p-6 flex flex-col">
                  <div className="flex mt-7 flex-col items-center justify-between mb-8">
                    <div>
                      <Calendar
                        fullscreen={false}
                        value={selectedDate}
                        onChange={(date) => {
                          setSelectedDate(date);
                          if (date && selectedTime) setTimeError("");
                        }}
                        onSelect={(date) => {
                          setSelectedDate(date);
                          if (date && selectedTime) setTimeError("");
                        }}
                        disabledDate={disabledDate}
                        visibleMonth={currentMonth}
                        onVisibleMonthChange={setCurrentMonth}
                        className="bg-gray-700"
                        renderDay={(date) => {
                          const isToday = isSameDay(date.toDate(), new Date());
                          const isDisabled = disabledDate(date);
                          return (
                            <span 
                              className={`
                                ${isToday ? "font-bold text-primary" : ""}
                                ${isDisabled ? "text-gray-500 cursor-not-allowed" : ""}
                              `}
                            >
                              {date.date()}
                            </span>
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* RIGHT — Time slots */}
                <div className="w-1/4 bg-muted/30 overflow-y-auto p-6 scrollbar-hide">
                <p className="text-[14px] text-foreground/100 mt-1 mb-1">
               {selectedTime} {selectedDate ? selectedDate.format("MMMM Do YYYY") : "No date selected"}
                      </p>
                  <AnimatePresence>
                    {selectedDate ? (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
                        {timeSlots.map((time) => {
                          const active = selectedTime === time;
                          return (
                            <div
                              key={time}
                              onClick={() => {
                                setSelectedTime(time);
                                if (selectedDate) setTimeError("");
                              }}
                              className="relative h-12 rounded-lg overflow-hidden cursor-pointer hover:border-accent transition-colors"
                            >
                              <motion.div
                                animate={{ width: active ? "100%" : "200%" }}
                                className="h-full flex items-center px-2"
                              >
                                <Button
                                  className={`w-[50%] text-sm ${active ? "text-yellow font-medium bg-yellow-600" : ""}`}
                                  onPress={() => setSelectedTime(time)}
                                >
                                  {time}
                                </Button>
                              </motion.div>

                              <AnimatePresence>
                                {active && (
                                  <motion.div
                                    initial={{ x: 100 }}
                                    animate={{ x: 0 }}
                                    exit={{ x: 100 }}
                                    className="absolute inset-y-0 right-0 w-[45%] flex items-center justify-center"
                                  >
                                    <Button
                                      color="primary"
                                      variant="solid"
                                      size="sm"
                                      className="h-10 w-full font-medium"
                                      onPress={handleSchedule}
                                    >
                                      Schedule
                                    </Button>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </motion.div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-center text-foreground/50">
                        <p className="text-sm">Select a date</p>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}