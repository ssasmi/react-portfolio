import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";

export default function Copyright() {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        justifyContent="space-around"
        align="center"
      >
        <Link
          // className="blink-1"
          href="https://github.com/ssasmi"
          target="_blank"
          sx={{ p: 0.5 }}
        >
          <GitHubIcon
            className="fancy_card1"
            fontSize="large"
            sx={{ color: "white" }}
          />
        </Link>
        <Link
          // className="blink-1"
          href="https://github.com/ssasmi"
          target="_blank"
          sx={{ p: 0.5 }}
        >
          <ArticleIcon
            className="fancy_card1"
            fontSize="large"
            sx={{ color: "white" }}
          />
        </Link>
      </Typography>
    );
  }