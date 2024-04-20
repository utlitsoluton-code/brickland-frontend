import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { ReactTyped } from "react-typed";
import "./home.css";
import { data } from "../../data";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Box className="main">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/vdo.mp4?alt=media&token=c61b292a-0120-47e4-96d4-1bf5eaa398cf"
          alt="unable to load"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        <Box className="content">
          <Container>
            <Grid
              container
              spacing={2}
              className="sm:mb-40 md:mb-20 lg:mb-32 xl:mb-35"
            >
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="text-white">
                  <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl  whitespace-nowrap font-bold text-white">
                    Uncover Your Dream{" "}
                    <ReactTyped
                      strings={["APARTMENT", "VILLA", "HOME", "PLOT", "OFFICE"]}
                      typeSpeed={100}
                      loop
                      backSpeed={20}
                      showCursor={true}
                      className="inline-block "
                    />
                  </h1>
                </div>
                <div className="relative p-12 ">
                  <div
                    className="z-0 rounded-full p-3 mx-auto max-w-full lg:w-full lg:max-w-[82rem] lg:left-[6rem] xl:left-[10rem] 2xl:left-[12rem] md:max-w-[42rem] xl:max-w-[82rem] 2xl:max-w-[102rem]"
                    style={{ width: "52rem" }}
                  >
                    <form className="relative flex z-50 bg-white rounded-full">
                      <input
                        type="text"
                        placeholder="Search by City, Location, Project, Type"
                        className="overflow-hidden rounded-full flex-1 font-semibold px-6 py-4 text-gray-700 focus:outline-none"
                      />
                      <Link to="/search">
                        <button className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
                          Search
                        </button>
                      </Link>
                    </form>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Container>
        <Box py={5} sx={{ textAlign: "center" }}>
          <Typography variant="h3">Featured Properties</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card sx={styles.card}>
              <CardContent sx={styles.content}>
                <Typography variant="h5" component="h2" fontWeight={"bold"}>
                  M3M The Line 72
                </Typography>
                <Typography variant="body2" component="p">
                  ₹28000/mo4 Bed, 3 Beth, Flats. Area 1448-2537 sqft
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Box
              sx={{ textAlign: "center", borderRadius: 3, overflow: "hidden" }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/2.png?alt=media&token=2bc6fbc2-a9e4-4fe2-8351-7dc03397feeb"
                alt=""
                style={{ width: "100%", height: "auto", borderRadius: 5 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Box
              sx={{ textAlign: "center", borderRadius: 3, overflow: "hidden" }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/3.png?alt=media&token=fa132532-4670-42d5-bb45-bdfe367609c1"
                alt=""
                style={{ width: "100%", height: "auto", borderRadius: 5 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ py: 10 }}>
        <Grid container spacing={2}>
          {data.map((item, index) => {
            return (
              <>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} key={index}>
                  <Box
                    style={{
                      background: "var(--pink)",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                    className="rounded-xl"
                  >
                    <img
                      className="rounded-t-xl"
                      src={item.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "auto",
                        transition: "transform 0.3s ease-in-out",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.transform = "scale(1)")
                      }
                    />
                    <Box className="p-5">
                      <Typography>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {item.title}
                        </h5>
                      </Typography>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item.discripton}
                      </p>
                    </Box>
                  </Box>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              sx={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                background: "var(--yellow)",
                p: 4,
                gap: 2,
                borderRadius: 3,
                "&:hover": {
                  background: "var(--blue)",
                },
              }}
            >
              <Box>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/9.png?alt=media&token=23f1fb5b-94b9-4927-966d-8f68ba049bda"
                  alt=""
                />
              </Box>
              <Box>
                <Typography variant="h4">Looking for the new home?</Typography>
                <Typography>
                  10 new offers evry day. 350 offers on site trusted by a
                  community of the thousands of users
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ background: "var(--pink)", my: 5, py: 5 }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography variant="h3">Why Choose Us</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box
                sx={{
                  background: "var(--yellow)",
                  display: "flex",
                  p: 2,
                  width: "fit-content",
                  borderRadius: 2,
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/11.png?alt=media&token=a37de800-3528-45d6-a8a9-7a5d5928f648"
                  alt=""
                />
              </Box>
              <Box mt={2}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Sell, Rent Property Free
                </h5>
              </Box>
              <Typography sx={{ color: "#666666" }}>
                Our experts answer all queries with their unmatched knowledge at
                every step of home buying.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box
                sx={{
                  background: "var(--yellow)",
                  display: "flex",
                  p: 2,
                  width: "fit-content",
                  borderRadius: 2,
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/12.png?alt=media&token=88896714-2bdc-4198-882d-5b0ebe5d0429"
                  alt=""
                />
              </Box>
              <Box mt={2}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  In-depth Info on Investment Hotspots
                </h5>
              </Box>
              <Typography sx={{ color: "#666666" }}>
                Our experts answer all queries with their unmatched knowledge at
                every step of home buying.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box
                sx={{
                  background: "var(--yellow)",
                  display: "flex",
                  p: 2,
                  width: "fit-content",
                  borderRadius: 2,
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/13.png?alt=media&token=79054b63-f716-41d2-bc9a-8f3664e241ae"
                  alt=""
                />
              </Box>
              <Box mt={2}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Pool of Best Property Options
                </h5>
              </Box>
              <Typography sx={{ color: "#666666" }}>
                Our experts answer all queries with their unmatched knowledge at
                every step of home buying.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
const styles = {
  card: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 3,
    backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/1.png?alt=media&token=86a9124f-a54e-4a6c-9527-06dfe734c398)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    color: "#fff",
    "&:hover": {
      cursor: "pointer",
    },
  },
  content: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "16px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "0 0 8px 8px",
  },
};

export default Home;
