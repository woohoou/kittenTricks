import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { MenuIcon } from '../../components/icons';

export const HomeScreen = (props): React.ReactElement => {
  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction icon={MenuIcon} onPress={props.navigation.toggleDrawer} />
  );

  return (
    <SafeAreaLayout style={styles.safeArea} insets="top">
      <TopNavigation title="Kitten Tricks" accessoryLeft={renderDrawerAction} />
      <Divider />
      <Text>Hello world</Text>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
