import { Card, Container, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import ButtonComponent from "../../components/Button";

const BlogDetail = () => {
  const location = useLocation();

  return (
    <Container maxWidth="xl">
      <Grid container className="mt-5" spacing={4}>
        <Grid item md={12}>
          <img
            src={location.state}
            style={{ width: "100%", height: 500, borderRadius: 12 }}
          />
        </Grid>
        <Grid item md={8}>
          <Typography variant="h4">
            Housing Bubble 2024: Are housing Market Crashing?
          </Typography>
          <div className="mt-3">
            <Typography
              fontSize={16}
              component={"p"}
              color="text.primary"
              mt={3}
            >
              Id neque risus faucibus eu et viverra accumsan. Nunc tincidunt mi
              lacus libero risus et nibh iaculis. Ut tincidunt ac eu et odio
              facilisis. Risus non dui purus adipiscing ut porta eget. Quis vel
              adipiscing lorem rutrum sed. Ac orci lacinia tellus id risus
              neque. Turpis pellentesque gravida rhoncus dignissim praesent.
              Quis semper lacinia sed eleifend quis velit ac. Penatibus diam
              nunc platea tincidunt pretium leo. At non adipiscing vel ut ornare
              ullamcorper eget. Porta neque lacus nec velit pretium tellus eu
              gravida.
            </Typography>
            <Typography
              fontSize={16}
              component={"p"}
              color="text.primary"
              mt={3}
            >
              Velit adipiscing donec amet bibendum dui. Dolor arcu elementum
              pharetra ante auctor suspendisse. Mollis tortor dapibus id
              faucibus. Nunc rhoncus risus lacinia at viverra tincidunt nullam
              erat et. Arcu risus vulputate egestas consequat elementum amet
              posuere. Consectetur nulla quis at viverra tempus. Ipsum eget
              venenatis magna purus ac habitant nibh lacus. Tincidunt ac netus
              morbi vitae cursus nunc et aliquam.
            </Typography>
            <Typography
              fontSize={16}
              component={"p"}
              color="text.primary"
              mt={3}
            >
              Elit ut libero lorem sit leo. Vivamus iaculis pharetra nulla
              feugiat volutpat ornare a varius. A sit ultrices id maecenas
              vulputate. At at sodales faucibus malesuada praesent in porttitor
              elementum lectus. Volutpat faucibus commodo in eu vel ipsum
              potenti.
            </Typography>
            <Typography
              fontSize={16}
              component={"p"}
              color="text.primary"
              mt={3}
            >
              Cursus risus consectetur nibh cras eu eget. Sit nunc facilisi
              porttitor convallis. Dolor ante at massa et fermentum scelerisque
              tortor. Consectetur lectus pulvinar sit egestas in. Quis aliquet
              ultrices leo neque nisi ut consequat. Ut pharetra augue in in
              pulvinar. Tortor quis amet purus sed laoreet cum. Enim blandit
              quam risus vitae. Purus sagittis tincidunt consectetur hendrerit
              turpis malesuada dui massa vestibulum.
            </Typography>
            <Typography
              fontSize={16}
              component={"p"}
              color="text.primary"
              mt={3}
            >
              Phasellus in sociis et dui dignissim elit ultricies morbi.
              Malesuada a bibendum feugiat cum. Dui facilisis elit turpis donec
              magna libero risus vitae. Sed egestas leo sed malesuada dui
              pretium neque. Volutpat diam amet pretium venenatis. Senectus
              ultrices adipiscing in pharetra donec. Tincidunt fringilla
              consequat scelerisque eu at aenean mauris. Risus gravida imperdiet
              scelerisque proin nullam id pharetra. Metus egestas turpis aliquam
              luctus sed cursus placerat elementum. Venenatis nibh duis nisl ut
              proin turpis sapien mattis. Tortor vehicula cursus amet euismod.
            </Typography>
          </div>
        </Grid>
        <Grid item md={4} mt={2} mb={3}>
          <Typography variant="h6">Related Blogs</Typography>

          <Card
            elevation={0}
            style={{ border: "1px solid #DBDBDB", borderRadius: 5 }}
            className="p-3 mt-3"
          >
            <div className="d-flex align-items-center gap-2">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinGCfuvtIzNvb6AsRFE7LtRJrTEKDxVxe6g&s"
                }
                style={{ height: 70, width: 70, borderRadius: 5 }}
              />
              <Typography variant="body2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium
              </Typography>
            </div>
          </Card>
          <Card
            elevation={0}
            style={{ border: "1px solid #DBDBDB", borderRadius: 5 }}
            className="p-3 mt-3"
          >
            <div className="d-flex align-items-center gap-2">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinGCfuvtIzNvb6AsRFE7LtRJrTEKDxVxe6g&s"
                }
                style={{ height: 70, width: 70, borderRadius: 5 }}
              />
              <Typography variant="body2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium
              </Typography>
            </div>
          </Card>
          <Card
            elevation={0}
            style={{ border: "1px solid #DBDBDB", borderRadius: 5 }}
            className="p-3 mt-3"
          >
            <div className="d-flex align-items-center gap-2">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinGCfuvtIzNvb6AsRFE7LtRJrTEKDxVxe6g&s"
                }
                style={{ height: 70, width: 70, borderRadius: 5 }}
              />
              <Typography variant="body2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium
              </Typography>
            </div>
          </Card>
          <Card
            elevation={0}
            style={{ border: "1px solid #DBDBDB", borderRadius: 5 }}
            className="p-3 mt-3"
          >
            <div className="d-flex align-items-center gap-2">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinGCfuvtIzNvb6AsRFE7LtRJrTEKDxVxe6g&s"
                }
                style={{ height: 70, width: 70, borderRadius: 5 }}
              />
              <Typography variant="body2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium
              </Typography>
            </div>
          </Card>
          <Card
            elevation={0}
            style={{ border: "1px solid #DBDBDB", borderRadius: 5 }}
            className="p-3 mt-3"
          >
            <div className="d-flex align-items-center gap-2">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinGCfuvtIzNvb6AsRFE7LtRJrTEKDxVxe6g&s"
                }
                style={{ height: 70, width: 70, borderRadius: 5 }}
              />
              <Typography variant="body2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium
              </Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <ButtonComponent
          sx={{
            color: "#13556D",
            border: "1px solid #C8D736",
            background: "white",
            fontWeight: 500,
          }}
          title="Previous Blog"
        />
        <ButtonComponent
          sx={{
            color: "#13556D",
            border: "1px solid #C8D736",
            background: "white",
            fontWeight: 500,
          }}
          title="Next Blog"
        />
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <Card
          elevation={0}
          style={{
            border: "1px solid #DBDBDB",
            borderRadius: 5,
            maxWidth: 362,
          }}
          className="p-3 mt-3"
        >
          <div className="d-flex align-items-center gap-2">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinGCfuvtIzNvb6AsRFE7LtRJrTEKDxVxe6g&s"
              }
              style={{ height: 70, width: 70, borderRadius: 5 }}
            />
            <Typography variant="body2">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium
            </Typography>
          </div>
        </Card>
        <Card
          elevation={0}
          style={{
            border: "1px solid #DBDBDB",
            borderRadius: 5,
            maxWidth: 362,
          }}
          className="p-3 mt-3"
        >
          <div className="d-flex align-items-center gap-2">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinGCfuvtIzNvb6AsRFE7LtRJrTEKDxVxe6g&s"
              }
              style={{ height: 70, width: 70, borderRadius: 5 }}
            />
            <Typography variant="body2">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium
            </Typography>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default BlogDetail;
