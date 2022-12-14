import {StyleSheet, View, Text} from 'react-native';
import {faLock, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import Item from './Item';
import {useContext} from 'react';
import {Context} from '@appContext/AppProvider';

const {SlideInMenu} = renderers;
function MenuPopUp() {
  const context = useContext(Context);
  const titleDropdown = context.self.dropdownHeader.titleSelf.title;
  const avatarDropdown = context.self.dropdownHeader.titleSelf.avatar;

  const titleAddAcccount = context.self.dropdownHeader.addAccount.title;
  const avatarAddAcccount = context.self.dropdownHeader.addAccount.avatar;

  return (
    <Menu renderer={SlideInMenu}>
      <MenuTrigger>
        <View style={styles.container}>
          <FontAwesomeIcon icon={faLock} size={15} />

          <Text style={styles.text}>Myself</Text>

          <FontAwesomeIcon icon={faChevronDown} size={20} />
        </View>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption style={styles.silde}>
          <Item title={titleDropdown} media={avatarDropdown} isBtn />
          <Item title={titleAddAcccount} media={avatarAddAcccount} />
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 20,
  },
  icon: {},
  silde: {
    height: 200,
  },
});
export default MenuPopUp;
