import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {StyleSheet, Text, View} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import CirclePopUp from './CirclePopUp';
import ListPopUp from './ListPopUp';
const {SlideInMenu} = renderers;
function MenuPopUpMenu() {
  return (
    <Menu renderer={SlideInMenu}>
      <MenuTrigger>
        <FontAwesomeIcon
          style={styles.icon}
          icon={faEllipsisVertical}
          size={20}
        />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1} style={styles.slideInOption}>
          <CirclePopUp />
          <ListPopUp />
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}
const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
  },
  slideInOption: {
    padding: 2,
    height: 450,
   
  },
});
export default MenuPopUpMenu;
