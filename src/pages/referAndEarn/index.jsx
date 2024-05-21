import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "../../components/Button";
import saveEarn from "../../assets/images/saveearn.png";
import referEarn from "../../assets/images/referearn.png";
import rent from "../../assets/images/rent.png";

const ReferAndEarn = () => {
  return (
    <div className="mt-5">
      <Container maxWidth="xl">
        <div className="py-5">
          <Grid
            container
            spacing={6}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item md={8}>
              <div>
                <Typography fontSize={32} color="text.primary" fontWeight={500}>
                  Save and Earn
                </Typography>
                <Typography
                  fontSize={18}
                  color="text.primary"
                  fontWeight={500}
                  className="mt-3"
                >
                  Saving for rent is tough, especially when it's due annually
                  and you are just a salary earner, freelancer or a regular
                  hustler. Enter our 'Save and Earn' feature – your solution to
                  not just save but also make money along the way. Save with us,
                  and we give you interest rates that surpasses traditional
                  financial institutions by the end of the year.
                </Typography>
                <ButtonComponent
                  sx={{ mt: 3 }}
                  title={"Get Started On Rent Saving Now"}
                />
              </div>
            </Grid>
            <Grid item md={4}>
              <img src={saveEarn} />
            </Grid>

            <Grid item md={4}>
              <img src={referEarn} />
            </Grid>
            <Grid item md={8}>
              <Typography fontSize={32} color="text.primary" fontWeight={500}>
                Refer and Earn
              </Typography>
              <Typography
                fontSize={18}
                color="text.primary"
                fontWeight={500}
                className="mt-3"
              >
                You can raise your next rent with Rentranzact! Imagine the
                feeling of earning commissions without any stress. You simply
                get landlords or property managers in your area to list their
                properties with us, and when it gets rented, you earn
                commissions; you're not just making money — you're paying your
                next rent effortlessly. The best part? You don't need to be a
                property manager or a landlord. Challenge yourself; ask property
                managers and landlords in your community to list their
                properties with us using your referral code, and combine that
                with our “Save and Earn” feature. You see? your next rent is
                being paid without doing much work.
              </Typography>
              <ButtonComponent
                sx={{ mt: 3 }}
                title={"Generate Your Referral Link"}
              />
            </Grid>
            <Grid item md={8}>
              <div>
                <Typography fontSize={32} color="text.primary" fontWeight={500}>
                  Rent Now; Pay Later
                </Typography>
                <Typography
                  fontSize={18}
                  color="text.primary"
                  fontWeight={500}
                  className="mt-3"
                >
                  When you get your property on Rentranzact, you can never be
                  stranded on Rent. That's because we are here to offer you a
                  hand when you need one; with a few clicks you can ask us to
                  pay your rent on your behalf and you pay us back using a more
                  flexible and friendlier repayment system.
                </Typography>
                <ButtonComponent sx={{ mt: 3 }} title={"Get Started"} />
              </div>
            </Grid>
            <Grid item md={4}>
              <img src={rent} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default ReferAndEarn;
