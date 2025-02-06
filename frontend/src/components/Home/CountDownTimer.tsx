import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const CountdownTimer: React.FC = () => {
  const targetDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 5); // 5 days from now
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeleft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }
  };

  useEffect(() => {
    const interval = setInterval(calculateTimeleft, 1000);
    calculateTimeleft();

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="flex justify-between items-center gap-5 mb-4">
      {Object.entries(timeLeft).map(([key, value], index) => (
        <Box key={index} className="text-center">
          <Typography
            variant="h6"
            className="w-[50px] h-[50px] text-center p-2 bg-[#00670c20] rounded-full"
          >
            {value.toString().padStart(2, "0")}
          </Typography>
          <Typography className="text-gray-500 mt-1">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CountdownTimer;
