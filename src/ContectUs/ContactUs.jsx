import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  MenuItem,
  Menu,
} from "@mui/material";
import {
  // ChevronDown,
  ShoppingCart,
  Support,
  FlashOn,
  Headset,
  ExpandMore,
} from "@mui/icons-material";
import "./ContectUs.css";

export default function MainPage() {
  const [activeForm, setActiveForm] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSupportSelect = (form) => {
    setActiveForm(form);
    handleClose();
  };
  const renderForm = () => {
    switch (activeForm) {
      case "dealership":
        return <DealershipForm />;
      case "buy":
        return <BuyForm />;
      case "sales":
        return <SalesForm />;
      case "service":
        return <ServiceForm />;
      case "support":
        return <SupportForm />;
      case "grievance":
        return <GrievanceForm />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f7f7f7",
        boxShadow: "inset 0px 0px 30px rgba(0, 0, 0, 0.1)",
        margin: "50px 20px",
        borderRadius: "10px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "1200px",
          padding: "20px",
          backdropFilter: "blur(5px)",
        }}
      >
        <CardHeader
          title={
            <Typography
              variant="h4"
              style={{ color: "#1e88e5", fontWeight: "bold" }}
            >
              Maxtron E-Scooters
            </Typography>
          }
          subheader={
            <Typography variant="subtitle1" style={{ color: "#666" }}>
              Your gateway to electric mobility
            </Typography>
          }
        />
        <CardContent>
          {!activeForm && (
            <div
              className="ForMobile"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "20px",
              }}
            >
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setActiveForm("dealership")}
                style={{ height: "100px", fontSize: "16px" }}
              >
                <FlashOn style={{ marginRight: "10px" }} />
                Become a Dealership
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setActiveForm("buy")}
                style={{ height: "100px", fontSize: "16px" }}
              >
                <ShoppingCart style={{ marginRight: "10px" }} />
                Buy Maxtron E-Scooter
              </Button>
              {/* Support Dropdown Button */}
              <Button
                variant="outlined"
                fullWidth
                onClick={handleMenuClick}
                style={{ height: "100px", fontSize: "16px" }}
              >
                <Headset style={{ marginRight: "10px" }} />
                Support
                <ExpandMore style={{ marginLeft: "5px" }} />
              </Button>
              {/* Support Menu */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleSupportSelect("sales")}>
                  Sales Inquiry
                </MenuItem>
                <MenuItem onClick={() => handleSupportSelect("service")}>
                  Service Request
                </MenuItem>
                <MenuItem onClick={() => handleSupportSelect("support")}>
                  General Support
                </MenuItem>
                <MenuItem onClick={() => handleSupportSelect("grievance")}>
                  Grievance
                </MenuItem>
              </Menu>
            </div>
          )}
          {renderForm()}
          {activeForm && (
            <Button
              onClick={() => setActiveForm(null)}
              variant="text"
              style={{ marginTop: "20px" }}
            >
              Back to Main Menu
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function DealershipForm() {
  return (
    <form style={{ marginTop: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Dealership Application
      </Typography>
      <TextField fullWidth label="Full Name" margin="normal" required />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        type="email"
        required
      />
      <TextField
        fullWidth
        label="Proposed Dealership Location"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Experience in EV Industry"
        margin="normal"
        multiline
        rows={4}
        required
      />
      <Button
        variant="contained"
        fullWidth
        type="submit"
        style={{ marginTop: "20px" }}
      >
        Submit Application
      </Button>
    </form>
  );
}

function BuyForm() {
  return (
    <form style={{ marginTop: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Purchase Inquiry
      </Typography>
      <TextField fullWidth label="Full Name" margin="normal" required />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        type="email"
        required
      />
      <TextField fullWidth label="Preferred Model" margin="normal" required />
      <TextField
        fullWidth
        label="Additional Information"
        margin="normal"
        multiline
        rows={4}
      />
      <Button
        variant="contained"
        fullWidth
        type="submit"
        style={{ marginTop: "20px" }}
      >
        Submit Inquiry
      </Button>
    </form>
  );
}

function SalesForm() {
  return (
    <form style={{ marginTop: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Sales Inquiry
      </Typography>
      <TextField fullWidth label="Full Name" margin="normal" required />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        type="email"
        required
      />
      <TextField
        fullWidth
        label="Sales Query"
        margin="normal"
        multiline
        rows={4}
        required
      />
      <Button
        variant="contained"
        fullWidth
        type="submit"
        style={{ marginTop: "20px" }}
      >
        Submit Query
      </Button>
    </form>
  );
}

function ServiceForm() {
  return (
    <form style={{ marginTop: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Service Request
      </Typography>
      <TextField fullWidth label="Full Name" margin="normal" required />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        type="email"
        required
      />
      <TextField fullWidth label="Scooter Model" margin="normal" required />
      <TextField
        fullWidth
        label="Describe the Issue"
        margin="normal"
        multiline
        rows={4}
        required
      />
      <Button
        variant="contained"
        fullWidth
        type="submit"
        style={{ marginTop: "20px" }}
      >
        Submit Service Request
      </Button>
    </form>
  );
}

function SupportForm() {
  return (
    <form style={{ marginTop: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Support Request
      </Typography>
      <TextField fullWidth label="Full Name" margin="normal" required />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        type="email"
        required
      />
      <TextField fullWidth label="Support Category" margin="normal" required />
      <TextField
        fullWidth
        label="Support Message"
        margin="normal"
        multiline
        rows={4}
        required
      />
      <Button
        variant="contained"
        fullWidth
        type="submit"
        style={{ marginTop: "20px" }}
      >
        Submit Support Request
      </Button>
    </form>
  );
}

function GrievanceForm() {
  return (
    <form style={{ marginTop: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Grievance Form
      </Typography>
      <TextField fullWidth label="Full Name" margin="normal" required />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        type="email"
        required
      />
      <TextField
        fullWidth
        label="Order Number (if applicable)"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Describe Your Grievance"
        margin="normal"
        multiline
        rows={4}
        required
      />
      <Button
        variant="contained"
        fullWidth
        type="submit"
        style={{ marginTop: "20px" }}
      >
        Submit Grievance
      </Button>
    </form>
  );
}
