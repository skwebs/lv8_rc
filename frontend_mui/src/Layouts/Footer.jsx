import {
  FacebookRounded,
  GitHub,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      className="footer"
      sx={{
        width: "100%",
        bgcolor: "#E0E3E7",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        p: 1,
      }}>
      <Stack direction="row" spacing={1}>
        <IconButton
          aria-label="facebook"
          color="primary"
          fontSize="large"
          href="https://facebook.com">
          <FacebookRounded />
        </IconButton>
        <IconButton
          color="primary"
          fontSize="large"
          aria-label="github"
          href="https://github.com">
          <GitHub />
        </IconButton>
        <IconButton
          color="primary"
          fontSize="large"
          aria-label="instagram"
          href="https://instagram.com">
          <Instagram />
        </IconButton>
        <IconButton
          color="primary"
          fontSize="large"
          aria-label="youtube"
          href="https://youtube.com">
          <YouTube />
        </IconButton>
      </Stack>
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Typography variant="body2" sx={{ mr: 2 }}>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a href="https://anshumemorial.in"> Your website</a>
        </Typography>
      </Stack>
    </Box>
  );
}
