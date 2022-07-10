import {
  Box,
  Heading,
  HStack,
  Menu,
  MenuButton,
  Spacer,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ToggleColorButton } from './ToggleColorButton';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Navbar = () => {
  return (
    <Box as='nav' mt={5}>
      <HStack>
        <Heading as='h1' size='lg'>
          Dz99
        </Heading>
        <Spacer />
        <ToggleColorButton />
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant='outline'
          >
            <HamburgerIcon color='red.100' border={50} borderColor='red.500' />
          </MenuButton>
          <MenuList>
            <MenuItem>About</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Works</MenuItem>
            <MenuItem>Blog</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};
