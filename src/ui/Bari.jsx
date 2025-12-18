// src/components/Bari.jsx
import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { motion } from "framer-motion";
import { BsDatabaseFillExclamation } from "react-icons/bs";
import {Button} from "@heroui/react";
// Your original perfect tooltip — untouched
const CustomTooltip = ({ active, payload, label, isDarkMode }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={`p-2 py-1 rounded-sm shadow-2xl border backdrop-blur-sm transition-all duration-200 ${
          isDarkMode
            ? "bg-gray-900/90 text-gray-100 border-gray-900"
            : "bg-white/90 text-gray-900 border-gray-200"
        }`}
      >
        <p className="font-semibold text-sm mb-2 text-teal-400">{label}</p>
        {payload.map((entry, index) => (
          <p
            key={index}
            className="text-sm font-medium flex items-center gap-2"
          >
            <span
              className="w-3 h-3 rounded-[2vw]"
              style={{ backgroundColor: entry.color }}
            />
            {entry.name}: <span className="font-bold">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const Bari = ({
  data,
  xKey,
  dataKeys,
  labelMap = {}, // ← NEW: This is the ONLY thing added
  width = "100%",
  height = 300,
  colors = ["#12A150", "#12A150", "#12A150"],
  showBorder = true,
  Grid = true,
  isDarkMode = false,
  title = "Chart Title",
  footer = "Chart Footer",
  YAxisShow = true,
  dataLabels = false,
  labelPosition = "top",
  LegendShow = true,
  radius = [6, 6, 0, 0],
  stackId = 2,
  theme = "default",
  ...props
}) => {
  const isEmpty = !data || data.length === 0 || data.every(item =>
    dataKeys.every(key => item[key] === undefined || item[key] === null)
  );

  // Your original themes — untouched
  const themes = {
    default: {
      light: "bg-white border border-gray-200/60 shadow-lg shadow-gray-500/5",
      dark: "bg-gray-950 border border-gray-800/60 shadow-2xl shadow-black/40",
    },
    glass: {
      light: "bg-white/75 backdrop-blur-2xl border border-white/40 shadow-2xl shadow-white/30",
      dark: "bg-gray-950 border border-gray-800/60 shadow-2xl shadow-black/40",
    },
    aura: {
      light: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-indigo-200/40 shadow-xl shadow-indigo-500/10",
      dark: "bg-gray-950 border border-gray-800/60 shadow-2xl shadow-black/40",
    },
    sunset: {
      light: "bg-gradient-to-br from-orange-50 via-pink-50 to-amber-50 border border-orange-200/50 shadow-xl shadow-orange-500/10",
      dark: "bg-gray-950 border border-gray-800/60 shadow-2xl shadow-black/40",
    },
    nord: {
      light: "bg-gray-50 border border-gray-300/50 shadow-lg shadow-gray-400/10",
      dark: "bg-gray-950 border border-gray-800/60 shadow-2xl shadow-black/40",
    },
    midnight: {
      light: "bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-300/60 shadow-xl shadow-slate-500/10",
      dark: "bg-gray-950 border border-gray-800/60 shadow-2xl shadow-black/40",
    },
    emerald: {
      light: "bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/60 shadow-xl shadow-emerald-500/10",
      dark: "bg-gray-950 border border-gray-800/60 shadow-2xl shadow-black/40",
    },
    minimal: {
      light: "bg-transparent border border-gray-200/50",
      dark: "bg-gray-950 border border-gray-800/60 shadow-2xl shadow-black/40",
    },
  };

  const selectedTheme = themes[theme] || themes.default;
  const bgClasses = isDarkMode ? selectedTheme.dark : selectedTheme.light;

  const textVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 } },
  };

  const footerVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.3 } },
  };

  // Helper to get display name from labelMap
  const getDisplayName = (key) => labelMap[key] || key;

  return (
    <div
      className={`rounded-xl m-4 transition-all duration-500 ease-in-out w-full max-w-full overflow-hidden flex flex-col font-sans ${bgClasses} ${
        showBorder ? "border border-gray-200 dark:border-gray-700" : "border-none"
      }`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      <div className="p-4 shrink-0">
        <motion.h3
          className={`text-md font-bold tracking-tight ${isDarkMode ? "text-gray-100" : "text-gray-900"} font-['Inter']`}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h3>
        <motion.div
          className={`text-xs italic ${isDarkMode ? "text-gray-400" : "text-gray-500"} font-['Inter']`}
          variants={footerVariants}
          initial="hidden"
          animate="visible"
        >
          {footer}
        </motion.div>
      </div>

      <div className="flex-1 min-h-0 flex items-center justify-center px-6 pb-6">
        {isEmpty ? (
          <div className="text-center py-12">
            <BsDatabaseFillExclamation className="mx-auto mb-4 text-7xl text-gray-400 dark:text-gray-500 opacity-70" />
            <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">No Data yet</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Chart will appear here once data is there!
            </p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart
              data={data}
              margin={{ top: 30, right: 10, left: 10, bottom: 0 }}
              {...props}
            >
              {Grid && (
                <CartesianGrid
                  strokeDasharray="1 1"
                  stroke={isDarkMode ? "#4b5563" : "#d1d5db"}
                  opacity={0.9}
                />
              )}

              <XAxis
                dataKey={xKey}
                tick={({ x, y, payload }) => (
                  <motion.g
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: payload.index * 0.1 }}
                  >
                    <text
                      x={x}
                      y={y}
                      dy={16}
                      textAnchor="middle"
                      fill={isDarkMode ? "#9ca3af" : "#6b7280"}
                      fontSize={13}
                      fontFamily="'Inter', sans-serif'"
                    >
                      {payload.value}
                    </text>
                  </motion.g>
                )}
                axisLine={{ stroke: isDarkMode ? "#6b7280" : "#9ca3af" }}
                tickLine={false}
                className="font-medium"
              />

              {YAxisShow && (
                <YAxis
                  tick={{
                    fill: isDarkMode ? "#9ca3af" : "#6b7280",
                    fontSize: 13,
                    fontFamily: "'Inter', sans-serif",
                  }}
                  axisLine={{ stroke: isDarkMode ? "#6b7280" : "#9ca3af" }}
                  tickLine={false}
                  className="font-medium"
                />
              )}

              <Tooltip
                content={<CustomTooltip isDarkMode={isDarkMode} />}
                cursor={{
                  fill: isDarkMode
                    ? "rgba(75, 85, 99, 0.2)"
                    : "rgba(209, 213, 219, 0.2)",
                }}
              />

              {LegendShow && (
                <Legend
                  formatter={(value) => getDisplayName(value)} // ← Uses your custom names
                  wrapperStyle={{
                    paddingTop: "10px",
                    fontSize: "12px",
                    color: isDarkMode ? "#d1d5db" : "#4b5563",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                  }}
                />
              )}

              {dataKeys.map((key, index) => {
                const isStacked = stackId === 2;

                return (
                  <Bar
                    key={key}
                    dataKey={key}
                    name={getDisplayName(key)} // ← This fixes tooltip + legend
                    stackId={isStacked ? "stack" : undefined}
                    fill={colors[index % colors.length]}
                    radius={radius}
                    barSize={isStacked ? 80 : 100}
                    className="transition-all duration-300 hover:opacity-90 cursor-pointer"
                  >
                    {dataLabels && (
                      <LabelList
                        dataKey={key}
                        position={isStacked ? "insideTop" : labelPosition}
                        fill={isStacked ? "#ffffff" : isDarkMode ? "#e5e7eb" : "#374151"}
                        fontSize={12}
                        fontWeight={700}
                        formatter={(value) => (value > 0 ? value : "")}
                      />
                    )}
                  </Bar>
                );
              })}
            </RechartsBarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Bari;