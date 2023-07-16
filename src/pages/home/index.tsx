import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import "./home.css";

const Home = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}>
          <Link
            to="/camera"
            style={{
              width: "50%",
              height: "20%",
              cursor: "pointer",
              textDecoration: "none",
              color: "#fff",
            }}>
            <Card
              className="card-wrap"
              sx={{
                backgroundColor: "rgb(228, 129, 37)",
                color: "#fff",
                minHeight: "100%;",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <CardContent>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <CameraAltOutlinedIcon sx={{ fontSize: 30 }} />
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={8}>
                  <CardContent>
                    <Typography>Quét nông sản bằng ảnh</Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Link>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}>
          <Link
            to="/documents"
            style={{
              width: "50%",
              height: "20%",
              cursor: "pointer",
              textDecoration: "none",
              color: "#fff",
            }}>
            <Card
              className="card-wrap"
              sx={{
                backgroundColor: "rgb(228, 129, 37)",
                color: "#fff",
                minHeight: "100%;",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <CardContent>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <ArticleOutlinedIcon sx={{ fontSize: 30 }} />
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={8}>
                  <CardContent>
                    <Typography>Thông tin nông sản</Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
