import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Company from "../images/comapny.svg";
import thunder from "../images/thunder.svg";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../themes/colors";
export default function JobCard({
  jobTitle,
  location,
  jobDescription,
  experience,
  jdLink,
  minExp,
  maxExp,
}) {
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    window.open(jdLink, "_blank");
  };

  return (
    <Card
      sx={{
        minWidth: "75px",
        maxWidth: "360px",
        borderRadius: "20px",
        padding: "5px",
        textTransform: "none",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <div style={{ padding: "5px 10px" }}>
        <Box
          component="section"
          style={{ padding: "6px 4px" }}
          sx={{
            width: "100px",
            border: "1px grey",
            borderRadius: "10px",
            fontSize: "9px",
            boxShadow: "0px 1px ",
            fontFamily:
              "font-family: __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
        >
          ⏳ Posted 10 hrs ago
        </Box>
      </div>

      <CardContent
        style={{
          padding: "8px 16px",
          height: open ? "auto" : "400px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={Company} alt="company" width={40} height={40} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                marginTop: "3px",
                fontWeight: "bold",
                fontFamily:
                  "font-family: __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
              }}
              color="text.secondary"
            >
              companyName
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>{jobTitle}</Typography>
            <Typography sx={{ fontSize: "11px" }}>{location}</Typography>
          </div>
        </div>

        <Typography
          sx={{
            fontSize: "16px",
            textAlign: "start",
            marginTop: 1,
            fontWeight: "bold",
            fontFamily:
              "font-family: __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
        >
          About Company:
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            textAlign: "start",
            marginTop: "2px",
            fontWeight: "bold",
            fontFamily:
              "font-family: __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
        >
          About Us
        </Typography>
        <div
          style={{
            position: "relative",
            height: open ? "auto" : "200px",
            overflow: open ? "visible" : "hidden",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              textAlign: "start",
              marginTop: "2px",
              fontFamily:
                "font-family: __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
            }}
          >
            {jobDescription}
          </Typography>
        </div>
        <div>
          <Button
            variant="text"
            sx={{
              textTransform: "none",
              fontFamily:
                "font-family: __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
            }}
            onClick={() => setOpen((prev) => !prev)}
          >
            View job
          </Button>
        </div>

        <Typography
          sx={{
            fontSize: "13px",
            textAlign: "start",
            marginTop: "2px",
            fontWeight: "bold",
            fontFamily:
              "font-family: __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
          color="text.secondary"
        >
          Minimum Experience
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            textAlign: "start",
            marginTop: "2px",
            fontFamily:
              "font-family: __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
        >
          {minExp !== null && maxExp !== null
            ? `${minExp} - ${maxExp} years`
            : ""}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            textAlign: "start",
            marginTop: "2px",
            fontFamily:
              "font-family: __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
          }}
          color="text.secondary"
        >
          {experience}
        </Typography>
      </CardContent>
      <div>
        <CardActions>
          <ThemeProvider theme={theme}>
            <Button
              onClick={handleButtonClick}
              color="ochre"
              size="large"
              variant="contained"
              sx={{
                width: "500px",
                textTransform: "none",
                fontWeight: "bold",
                fontFamily:
                  "font-family: __LexendFont_7838d2, __LexendFont_Fallback_7838d2",
                fontSize: "16px",
              }}
              startIcon={<img src={thunder} alt="Custom Icon" width={18} />}
            >
              Easy Apply
            </Button>
          </ThemeProvider>
        </CardActions>
      </div>
    </Card>
  );
}
