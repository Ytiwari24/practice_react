// import React, { useState } from 'react';

// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     IconButton,
//     Container,
//     Drawer,
//     List,
//     ListItem,
//     ListItemText,
//     Paper,
//     ListItemIcon,
//     Avatar,
//     Card,
//     CardContent,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
// // import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const MyApp = () => {
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//     const toggleDrawer = (open) => (event) => {
//         if (
//             event.type === 'keydown' &&
//             (event.key === 'Tab' || event.key === 'Shift')
//         ) {
//             return;
//         }

//         setIsDrawerOpen(open);
//     };

//     const drawerContent = (
//         <List>
//             <ListItem button>
//                 <ListItemIcon>
//                     <HomeIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Features" />
//             </ListItem>
//             <ListItem button>
//                 <ListItemIcon>
//                     <HomeIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Pricing" />
//             </ListItem>
//             <ListItem button>
//                 <ListItemIcon>
//                     <HomeIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Solutions" />
//             </ListItem>
//             <ListItem button>
//                 <ListItemIcon>
//                     <HomeIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Customers" />
//             </ListItem>
//             <ListItem button>
//                 <ListItemIcon>
//                     <HomeIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Resources" />
//             </ListItem>
//             <ListItem button>
//                 <ListItemIcon>
//                     <HomeIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Get Started" />
//             </ListItem>
//         </List>
//     );

//     return (
//         <div>
//             <AppBar position="static">
//                 <Toolbar>
//                     {/* Menu Button */}
//                     <IconButton
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         onClick={toggleDrawer(true)}
//                     >
//                         <MenuIcon />
//                     </IconButton>

//                     {/* App Name */}
//                     <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold', fontSize: '1.5rem' }}>
//                         Future X
//                     </Typography>


//                     {/* Additional Titles */}
//                     <Typography variant="h6" style={{ marginRight: 30 }}>
//                         Features
//                     </Typography>
//                     <Typography variant="h6" style={{ marginRight: 30 }}>
//                         Pricing
//                     </Typography>
//                     <Typography variant="h6" style={{ marginRight: 30 }}>
//                         Solutions
//                     </Typography>
//                     <Typography variant="h6" style={{ marginRight: 30 }}>
//                         Customers
//                     </Typography>
//                     <Typography variant="h6" style={{ marginRight: 30 }}>
//                         Resources
//                     </Typography>
//                     <Typography variant="h6" style={{ marginRight: 30 }}>
//                         Get Started
//                     </Typography>
//                     {/* User Profile */}
//                     <IconButton color="inherit">
//                         <Avatar>
//                             <AccountCircleIcon />
//                         </Avatar>
//                     </IconButton>


//                 </Toolbar>
//             </AppBar>

//             {/* Drawer */}
//             <Drawer
//                 anchor="left"
//                 open={isDrawerOpen}
//                 onClose={toggleDrawer(false)}
//             // width="300px"
//             >
//                 {/* Apply styles to Paper component for the desired width */}
//                 <Paper sx={{ width: '300px' }}></Paper>
//                 {drawerContent}
//             </Drawer>

//             {/* Gap of 20 height */}
//             <div style={{ height: '20px' }} />

//             {/* Cards and Description */}

//             <Container>
//                 {/* Cards */}
//                 {/* Card 1 */}
//                 <Card sx={{ width: '300px', height: '200px', marginBottom: '16px' }}>
//                     <CardContent>
//                         <Typography variant="h5" component="div" fontWeight="bold">
//                             Card 1
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary" >
//                             Description for Card 1
//                         </Typography>
//                     </CardContent>
//                 </Card>

//                 {/* Card 2 */}
//                 <Card sx={{ width: '300px', height: '200px', marginBottom: '16px' }}>
//                     <CardContent>
//                         <Typography variant="h5" component="div">
//                             Card 2
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                             Description for Card 2
//                         </Typography>
//                     </CardContent>
//                 </Card>
//                 {/* Description Details */}
//                 <Typography variant="h4" gutterBottom>
//                     Description Details
//                 </Typography>
//                 <Typography variant="body1">
//                     This is a description of your app or any other relevant details.
//                 </Typography>
//             </Container>
//         </div>
//     );
// };

// export default MyApp;

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemIcon,
  Avatar,
  Card,
  CardContent,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MyApp = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const drawerContent = (
    <List>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ArrowForwardIcon />
        </ListItemIcon>
        <ListItemText primary="Technology" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ArrowForwardIcon />
        </ListItemIcon>
        <ListItemText primary="Future Plans" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ArrowForwardIcon />
        </ListItemIcon>
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ArrowForwardIcon />
        </ListItemIcon>
        <ListItemText primary="Our Teams" />
      </ListItem>
    </List>
  );

  return (
    <div>
       <AppBar position="static" sx={{ backgroundColor: '#2196f3', padding: '10px' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold', fontSize: '1.5rem' }}>
            Future X
          </Typography>
          {/* Additional Titles */}
                     <Typography variant="h6" style={{ marginRight: 30 }}>
                         Features
                     </Typography>
                     <Typography variant="h6" style={{ marginRight: 30 }}>
                         Pricing
                     </Typography>
                     <Typography variant="h6" style={{ marginRight: 30 }}>
                         Solutions
                     </Typography>
                     <Typography variant="h6" style={{ marginRight: 30 }}>
                         Customers
                     </Typography>
                     <Typography variant="h6" style={{ marginRight: 30 }}>
                         Resources
                     </Typography>
                     <Typography variant="h6" style={{ marginRight: 30 }}>
                         Get Started
                     </Typography>
          <IconButton color="inherit">
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Paper sx={{ width: '300px' }}>
          {drawerContent}
        </Paper>
      </Drawer>

      <Container>
        {/* Projects Section */}
        <Paper
          sx={{
            backgroundColor: '#e0f7fa',
            padding: '16px',
            marginBottom: '20px',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
          <Typography variant="body1">
            Explore our latest projects and achievements.
          </Typography>
        </Paper>

        {/* Technology Section */}
        <Paper
          sx={{
            backgroundColor: '#ffcc80',
            padding: '16px',
            marginBottom: '20px',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Technology
          </Typography>
          <Typography variant="body1">
            Learn about the cutting-edge technologies we leverage to drive innovation.
          </Typography>
        </Paper>

        {/* Future Plans Section */}
        <Paper
          sx={{
            backgroundColor: '#c5e1a5',
            padding: '16px',
            marginBottom: '20px',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Future Plans
          </Typography>
          <Typography variant="body1">
            Discover our vision and future plans for growth and development.
          </Typography>
        </Paper>

        {/* Services Section */}
        <Paper
          sx={{
            backgroundColor: '#ffd54f',
            padding: '16px',
            marginBottom: '20px',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Services
          </Typography>
          <Typography variant="body1">
            Explore our comprehensive range of services tailored to meet your business needs.
          </Typography>
        </Paper>

        {/* Our Teams Section */}
        <Paper
          sx={{
            backgroundColor: '#f8bbd0',
            padding: '16px',
            marginBottom: '20px',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Our Teams
          </Typography>
          <Typography variant="body1">
            Meet the talented individuals who make up our dedicated teams.
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default MyApp;
