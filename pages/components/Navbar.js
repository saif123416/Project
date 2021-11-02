import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <nav className='nav-bar'>
              <span className='menu-div'>
              <h4 className="nav-title">UsethisVoucher</h4>
                
                <ul className='nav-bar ul'>
                 
                  
                  <li className='navbar-list'> Categories<KeyboardArrowDownIcon />
                    <div className='mega-menu'>
                      <div className='inner-mega-menu, menu-child'>
                        <div className='list-items'>
                          <a href="https://www.youtube.com/results?search_query=how+to+use+material+ui"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-plane"></i> Travel</button></a>
                          <p>
                            <a href="#">Flights</a><br></br>
                            <a href="#">Trains, Buses & Ferries</a><br></br>
                            <a href="#">Holidays</a><br></br>
                            <a href="#">Hotels & Accomodation</a><br></br>
                            <a href="#">Luggage</a><br></br>
                            <a href="#">Parking, Transfers & Rentals</a><br></br>
                            <a href="#">Holiday & Travel Essentials</a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-shopping-bag"></i> Fashion</button></a>
                          <p>
                            <a href="#">Footwear</a><br></br>
                            <a href="#">Jewellery</a><br></br>
                            <a href="#">Women's Fashion</a><br></br>
                            <a href="#">Designerwear</a><br></br>
                            <a href="#">Men's Fashion</a><br></br>
                            <a href="#">Lingerie & Swimwear</a><br></br>
                            <a href="#">Fashion Accessories</a><br></br>
                            <a href="#">Plus Size</a><br></br>
                            <a href="#">Children & Teen Fashion</a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-home"></i> Home & Garden</button></a>
                          <p>
                            <a href="#">Lawn & Garden</a><br></br>
                            <a href="#">Outdoor Living</a><br></br>
                            <a href="#">Pool & Spa</a><br></br>
                            <a href="#"></a><br></br>
                            <a href="#"></a><br></br>
                            <a href="#"></a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-plug"></i> Technology</button></a>
                          <p>
                            <a href="#">Computer Accessories</a><br></br>
                            <a href="#">Computer Components</a><br></br>
                            <a href="#">External Components</a><br></br>
                            <a href="#">Laptop Accessories</a><br></br>
                            <a href="#">Tablet Accessories</a><br></br>
                            <a href="#"></a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-gift"></i> Gifts & Occasions</button></a>
                          <p>
                            <a href="#">Air</a><br></br>
                            <a href="#">Car Rental</a><br></br>
                            <a href="#">Cruises</a><br></br>
                            <a href="#">Hotel</a><br></br>
                            <a href="#">Vacation Packages</a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-campground"></i> Days Out</button></a>
                          <p>
                            <a href="#">Air</a><br></br>
                            <a href="#">Car Rental</a><br></br>
                            <a href="#">Cruises</a><br></br>
                            <a href="#">Hotel</a><br></br>
                            <a href="#">Vacation Packages</a></p>
                        </div>
                      </div>
                      <br></br>
                      {/* Second row */}
                      <div className='inner-mega-menu, menu-child'>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-cut"></i> Health & Beauty</button></a>
                          <p>
                            <a href="#">Air</a><br></br>
                            <a href="#">Car Rental</a><br></br>
                            <a href="#">Cruises</a><br></br>
                            <a href="#">Hotel</a><br></br>
                            <a href="#">Vacation Packages</a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-dumbbell"></i> Sports & Fitness</button></a>
                          <p>
                            <a href="#">Clothing Accessories</a><br></br>
                            <a href="#">Baby & Kids</a><br></br>
                            <a href="#">Costumes</a><br></br>
                            <a href="#">Men</a><br></br>
                            <a href="#">Women</a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-baby-carriage"></i> Kids & Babies</button></a>
                          <p>
                            <a href="#">Lawn & Garden</a><br></br>
                            <a href="#">Outdoor Living</a><br></br>
                            <a href="#">Pool & Spa</a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-compact-disc"></i> Entertainment</button></a>
                          <p>
                            <a href="#">Computer Accessories</a><br></br>
                            <a href="#">Computer Components</a><br></br>
                            <a href="#">External Components</a><br></br>
                            <a href="#">Laptop Accessories</a><br></br>
                            <a href="#">Tablet Accessories</a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-utensils"></i> Food & Drink</button></a>
                          <p>
                            <a href="#">Air</a><br></br>
                            <a href="#">Car Rental</a><br></br>
                            <a href="#">Cruises</a><br></br>
                            <a href="#">Hotel</a><br></br>
                            <a href="#">Vacation Packages</a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-pizza-slice"></i> Eating Out</button></a>
                          <p>
                            <a href="#">Air</a><br></br>
                            <a href="#">Car Rental</a><br></br>
                            <a href="#">Cruises</a><br></br>
                            <a href="#">Hotel</a><br></br>
                            <a href="#">Vacation Packages</a></p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='navbar-list, bb'>Trending<KeyboardArrowDownIcon />
                    <div className='mega-menu'>
                      <div className='inner-mega-menu, menu-child'>
                        <div className='list-items'>
                          <a href="https://www.youtube.com/results?search_query=how+to+use+material+ui"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-plane"></i> Travel</button></a>
                          <p>
                            <a href="#">Flights</a><br></br>
                            <a href="#">Trains, Buses & Ferries</a><br></br>
                            <a href="#">Holidays</a><br></br>
                            <a href="#">Hotels & Accomodation</a><br></br>
                            <a href="#">Luggage</a><br></br>
                            <a href="#">Parking, Transfers & Rentals</a><br></br>
                            <a href="#">Holiday & Travel Essentials</a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-shopping-bag"></i> Fashion</button></a>
                          <p>
                            <a href="#">Footwear</a><br></br>
                            <a href="#">Jewellery</a><br></br>
                            <a href="#">Women's Fashion</a><br></br>
                            <a href="#">Designerwear</a><br></br>
                            <a href="#">Men's Fashion</a><br></br>
                            <a href="#">Lingerie & Swimwear</a><br></br>
                            <a href="#">Fashion Accessories</a><br></br>
                            <a href="#">Plus Size</a><br></br>
                            <a href="#">Children & Teen Fashion</a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-home"></i> Home & Garden</button></a>
                          <p>
                            <a href="#">Lawn & Garden</a><br></br>
                            <a href="#">Outdoor Living</a><br></br>
                            <a href="#">Pool & Spa</a><br></br>
                            <a href="#"></a><br></br>
                            <a href="#"></a><br></br>
                            <a href="#"></a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-plug"></i> Technology</button></a>
                          <p>
                            <a href="#">Computer Accessories</a><br></br>
                            <a href="#">Computer Components</a><br></br>
                            <a href="#">External Components</a><br></br>
                            <a href="#">Laptop Accessories</a><br></br>
                            <a href="#">Tablet Accessories</a><br></br>
                            <a href="#"></a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-gift"></i> Gifts & Occasions</button></a>
                          <p>
                            <a href="#">Air</a><br></br>
                            <a href="#">Car Rental</a><br></br>
                            <a href="#">Cruises</a><br></br>
                            <a href="#">Hotel</a><br></br>
                            <a href="#">Vacation Packages</a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-campground"></i> Days Out</button></a>
                          <p>
                            <a href="#">Air</a><br></br>
                            <a href="#">Car Rental</a><br></br>
                            <a href="#">Cruises</a><br></br>
                            <a href="#">Hotel</a><br></br>
                            <a href="#">Vacation Packages</a></p>
                        </div>
                      </div>
                      <br></br>
                      {/* Second row */}
                      <div className='inner-mega-menu, menu-child'>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-cut"></i> Health & Beauty</button></a>
                          <p>
                            <a href="#">Air</a><br></br>
                            <a href="#">Car Rental</a><br></br>
                            <a href="#">Cruises</a><br></br>
                            <a href="#">Hotel</a><br></br>
                            <a href="#">Vacation Packages</a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-dumbbell"></i> Sports & Fitness</button></a>
                          <p>
                            <a href="#">Clothing Accessories</a><br></br>
                            <a href="#">Baby & Kids</a><br></br>
                            <a href="#">Costumes</a><br></br>
                            <a href="#">Men</a><br></br>
                            <a href="#">Women</a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-baby-carriage"></i> Kids & Babies</button></a>
                          <p>
                            <a href="#">Lawn & Garden</a><br></br>
                            <a href="#">Outdoor Living</a><br></br>
                            <a href="#">Pool & Spa</a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-compact-disc"></i> Entertainment</button></a>
                          <p>
                            <a href="#">Computer Accessories</a><br></br>
                            <a href="#">Computer Components</a><br></br>
                            <a href="#">External Components</a><br></br>
                            <a href="#">Laptop Accessories</a><br></br>
                            <a href="#">Tablet Accessories</a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-utensils"></i> Food & Drink</button></a>
                          <p>
                            <a href="#">Air</a><br></br>
                            <a href="#">Car Rental</a><br></br>
                            <a href="#">Cruises</a><br></br>
                            <a href="#">Hotel</a><br></br>
                            <a href="#">Vacation Packages</a></p>
                        </div>
                        <div className='list-items'>
                          <a href="#"><button type="button" className="btn btn-primary, menu-child, bts"><i class="fas fa-pizza-slice"></i> Eating Out</button></a>
                          <p>
                            <a href="#">Air</a><br></br>
                            <a href="#">Car Rental</a><br></br>
                            <a href="#">Cruises</a><br></br>
                            <a href="#">Hotel</a><br></br>
                            <a href="#">Vacation Packages</a></p>
                        </div>
                      </div>
                    </div></li>
                  <a href="#"><li>Stores</li></a>
                  <a href="#"><li>Countries</li></a>
                  <a href="#"><li>Students</li></a>
                  <li>
            <Search className="navbar-search">
              <SearchIconWrapper >
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase

                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </li>
                </ul>

              </span>

            </nav>
          </Typography>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}








// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// export default function PrimarySearchAppBar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h4"
//             noWrap
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//           >
//               Coupon World
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//               <Badge badgeContent={4} color="error">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               aria-label="show 17 new notifications"
//               color="inherit"
//             >
//               <Badge badgeContent={17} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }