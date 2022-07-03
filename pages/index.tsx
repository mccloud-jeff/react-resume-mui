import React, { useState } from "react";
import type { NextPage } from "next";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Box,
  Paper,
  PaletteMode,
  useMediaQuery,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/WorkHistory";
import WorkHistoryIcon from "@mui/icons-material/History";
import SchoolIcon from "@mui/icons-material/School";

import Header from "@/components/Header";
import Section from "@/components/Section";
import Position from "@/components/Position";
import BulletList, { BulletListItem } from "@/components/BulletList";
import ToolButtonBar from "@/components/ToolButtonBar";

import resume from "@/data/resume.json";

const {
  name,
  title,
  summary,
  email,
  phone,
  skills,
  currentPosition,
  priorPositions,
  education,
} = resume;

const headerInfo = { name, title, summary, email, phone };

const Home: NextPage = () => {
  const systemMode: PaletteMode = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";

  const [paletteMode, setPaletteMode] = useState<string | undefined>("light");

  const mode: PaletteMode =
    paletteMode === undefined
      ? systemMode
      : paletteMode === "light"
      ? "light"
      : "dark";

  const theme = createTheme({
    palette: { mode },
  });

  return (
    <>
      <style>
        {`body { background-color: ${mode === "light" ? "unset" : "#000"} }`}
      </style>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ToolButtonBar onPaletteModeChange={(mode) => setPaletteMode(mode)} />

        <Paper className="paperPage" elevation={6}>
          <Header {...headerInfo} />

          <Box sx={{ p: 2 }}>
            <Section
              iconComponent={CodeIcon}
              title="PROGRAMMING LANGUAGES and TECHNICAL SKILLS"
            >
              <BulletList>
                {skills.map((skill) => (
                  <BulletListItem key={skill}>{skill}</BulletListItem>
                ))}
              </BulletList>
            </Section>

            <Section iconComponent={WorkIcon} title="CURRENT POSITION">
              <Position {...currentPosition} />
            </Section>

            <Section
              iconComponent={WorkHistoryIcon}
              title="PRIOR WORK EXPERIENCE"
            >
              {priorPositions.map((position) => (
                <Position key={position.name} {...position} />
              ))}
            </Section>

            <Section
              iconComponent={SchoolIcon}
              title="CERTIFICATIONS / EDUCATION"
            >
              {education.map((position) => (
                <Position key={position.name} {...position} />
              ))}
            </Section>
          </Box>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default Home;
