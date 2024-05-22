import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Grid, Stack, TextareaAutosize, Typography } from "@mui/material";
import { theme } from "../../../assets/theme";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ButtonComponent from "../../../components/Button";
import "./index.css";
import { inspectionRequestDone } from "../../../assets/images";
export default function EditInspectionsModal({ open, setOpen }) {
  const [step, setStep] = React.useState(1);
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="modal_custom"
        style={{ maxWidth: "1154px", maxWidth: "100%" }}
      >
        <DialogTitle id="alert-dialog-title">
          {step === 1 ? (
            <Typography
              fontSize={40}
              fontWeight={700}
              color={theme.palette.text.primary}
            >
              Inspection Request
            </Typography>
          ) : null}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {step === 1 ? (
              <Grid container>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                      showDaysOutsideCurrentMonth
                      fixedWeekNumber={6}
                    />
                  </LocalizationProvider>
                  <div>
                    <span
                      style={{ fontWeight: 400, fontSize: "10px" }}
                      color={theme.palette.text.secondary}
                    >
                      <span
                        style={{
                          color: "#07262E",
                        }}
                        className="customSpanDesign"
                      >
                        N
                      </span>{" "}
                      Available
                    </span>{" "}
                    <span
                      style={{ fontWeight: 400, fontSize: "10px" }}
                      color={theme.palette.text.secondary}
                    >
                      <span
                        style={{
                          color: "#DBDBDB",
                        }}
                        className="customSpanDesign"
                      >
                        N
                      </span>
                      Blocked
                    </span>
                    <span
                      style={{
                        fontWeight: 400,
                        fontSize: "10px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                      color={theme.palette.text.secondary}
                    >
                      <span
                        style={{
                          color: "#13556D",
                        }}
                        className="customSpanDesign"
                      >
                        N
                      </span>
                      Selected
                    </span>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    fontSize={18}
                    fontWeight={700}
                    color={theme.palette.text.secondary}
                    className="mb-2"
                  >
                    Message (Optional)
                  </Typography>
                  <TextareaAutosize
                    size="lg"
                    name="Size"
                    placeholder="Write a short message to Landlord/Property manager."
                    minRows={3}
                    className="p-2"
                    style={{
                      width: "100%",
                      border: "1px solid #B2BCBE",
                      borderRadius: "7px",
                      float: "right",
                    }}
                  />
                  <ButtonComponent
                    title={"Submit Inspection Request"}
                    sx={{ width: "50%", float: "right" }}
                    className={"mt-4"}
                    onClick={() => setStep(2)}
                  />
                </Grid>
              </Grid>
            ) : (
              <Box sx={{ width: "100%" }}>
                <Stack spacing={2}>
                  <div className="text-center">
                    <Typography
                      fontSize={24}
                      fontWeight={700}
                      color={theme.palette.text.secondary}
                    >
                      Request Sent
                    </Typography>
                    <Typography
                      fontSize={18}
                      fontWeight={400}
                      color={"#07262E"}
                    >
                      Your inspection booking request for{" "}
                      <span className="customSpanDesignText">21 November, 11:00 AM</span>
                      for “Delight Apartments” has been sent to the Landlord for
                      approval. We will notify you shortly
                    </Typography>
                    <ButtonComponent
                      title={"Done"}
                      onClick={() => {
                        setOpen(false);
                        setStep(1);
                      }}
                      sx={{ marginTop: "16px", marginBottom: "16px" }}
                    />
                    {inspectionRequestDone()}
                  </div>
                </Stack>
              </Box>
            )}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
