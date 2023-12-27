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



    // Sample data for each section
    const projectsData = [
        { title: 'Project 1', description: 'Description for Project 1' },
        { title: 'Project 2', description: 'Description for Project 2' },
        // Add more projects as needed
    ];

    const technologyData = [
        { title: 'Tech 1', description: 'Description for Tech 1' },
        { title: 'Tech 2', description: 'Description for Tech 2' },
        // Add more technologies as needed
    ];

    const futurePlansData = [
        { title: 'Plan 1', description: 'Description for Plan 1' },
        { title: 'Plan 2', description: 'Description for Plan 2' },
        // Add more future plans as needed
    ];

    const servicesData = [
        { title: 'Service 1', description: 'Description for Service 1' },
        { title: 'Service 2', description: 'Description for Service 2' },
        // Add more services as needed
    ];

    const teamsData = [
        { name: 'Anand Singh', role: 'Flutter Developer' },
        { name: 'Abhay Pal', role: 'Frontend Developer' },
        { name: 'Ashutosh Gupta', role: 'Cross-Platform' },
        { name: 'Pravesh Vishwakarma', role: 'Full Stack Developer' },
        { name: 'Rahul Pandey', role: 'Mern Stack Developer' },
        { name: 'Sachin Pal', role: 'Full Stack Developer' },

        // Add more team members as needed
    ];

    return (
        <div>


            <AppBar position="static">
                <Toolbar>
                    {/* Menu Button */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* App Name */}
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
                    {/* User Profile */}
                    <IconButton color="inherit">
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </IconButton>


                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                width="300px"
            >
                {/* Apply styles to Paper component for the desired width */}
                <Paper sx={{ width: '300px' }}></Paper>
                {drawerContent}
            </Drawer>

            {/* Gap of 20 height */}
            <div style={{ height: '20px' }} />

            {/* Cards and Description */}


            <Container>
                {/* Projects Section */}
                <Paper
                    sx={{
                        backgroundColor: '#e0f7fa',
                        padding: '16px',
                        marginBottom: '20px',
                    }}
                >
                    <Typography variant="h4" gutterBottom style={{ flexGrow: 1, fontWeight: 'bold', fontSize: '1.5rem' }}>
                        PROJECTS
                    </Typography>
                    {projectsData.map((project, index) => (
                        <Card key={index} sx={{ marginBottom: '12px' }}>
                            <CardContent>
                                <Typography variant="h6">{project.title}</Typography>
                                <Typography variant="body1">{project.description}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Paper>

                {/* Technology Section */}
                <Paper
                    sx={{
                        backgroundColor: '#ffcc80',
                        padding: '16px',
                        marginBottom: '20px',
                    }}
                >
                    <Typography variant="h4" gutterBottom style={{ flexGrow: 1, fontWeight: 'bold', fontSize: '1.5rem' }}>
                        TECHNOLOGY
                    </Typography>
                    {technologyData.map((tech, index) => (
                        <Card key={index} sx={{ marginBottom: '12px' }}>
                            <CardContent>
                                <Typography variant="h6">{tech.title}</Typography>
                                <Typography variant="body1">{tech.description}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Paper>

                {/* Future Plans Section */}
                <Paper
                    sx={{
                        backgroundColor: '#c5e1a5',
                        padding: '16px',
                        marginBottom: '20px',
                    }}
                >
                    <Typography variant="h4" gutterBottom style={{ flexGrow: 1, fontWeight: 'bold', fontSize: '1.5rem' }}>
                        FUTURE PLANS
                    </Typography>
                    {futurePlansData.map((plan, index) => (
                        <Card key={index} sx={{ marginBottom: '12px' }}>
                            <CardContent>
                                <Typography variant="h6">{plan.title}</Typography>
                                <Typography variant="body1">{plan.description}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Paper>

                {/* Services Section */}
                <Paper
                    sx={{
                        backgroundColor: '#ffd54f',
                        padding: '16px',
                        marginBottom: '20px',
                    }}
                >
                    <Typography variant="h4" gutterBottom style={{ flexGrow: 1, fontWeight: 'bold', fontSize: '1.5rem' }}>
                        SERVICES
                    </Typography>
                    {servicesData.map((service, index) => (
                        <Card key={index} sx={{ marginBottom: '12px' }}>
                            <CardContent>
                                <Typography variant="h6">{service.title}</Typography>
                                <Typography variant="body1">{service.description}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Paper>

                {/* Our Teams Section */}


                <Paper
                    sx={{
                        backgroundColor: '#f8bbd0',
                        padding: '16px',
                        marginBottom: '20px', width: '100%',
                        overflowX: 'auto', // Enable horizontal scrolling
                    }}
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                        style={{ flexGrow: 1, fontWeight: 'bold', fontSize: '1.5rem' }}
                    >
                        OUR TEAMS
                    </Typography>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '16px', // Adjust the gap between cards
                        }}
                    >
                        {teamsData.map((teamMember, index) => (
                            <Card key={index} sx={{ flex: '0 0 auto', minWidth: '200px', textAlign: 'center' }}>
                                <CardContent>
                                    <Avatar
                                        alt={teamMember.name}
                                        src={teamMember.profilePictureUrl}
                                        sx={{ width: 200, height: 200, marginBottom: '12px' }}
                                    />
                                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>{teamMember.name}</Typography>
                                    <Typography variant="body1" >{teamMember.role}</Typography>
                                    {/* Add more details like expertise, experience, etc. */}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Paper>
            </Container>
        </div>
    );
};

export default MyApp;

