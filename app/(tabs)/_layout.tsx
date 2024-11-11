import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#FFFFFF',       // Active icon color
      tabBarInactiveTintColor: '#E2DFD2',     // Inactive icon color
      tabBarStyle: {
        backgroundColor: '#0000FF',           // Background color of the tab bar
        borderRadius: 30,                     // Round the edges of the tab bar
        height: 60,                           // Height of the tab bar
        paddingBottom: 10,                    // Adjusts positioning of icons
        marginBottom: 20,                     // Adds space at the bottom of the screen
        marginLeft: 15,                       // Adds space to the left of the tab bar
        marginRight: 15,                      // Adds space to the right of the tab bar
        overflow: 'hidden',                   // Prevents content from overflowing rounded edges
      },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={focused ? '#FFFFFF' : '#E2DFD2'} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({focused }) => (
            <TabBarIcon name={focused ? 'chatbubbles' : 'chatbubbles-outline'} color={focused ? '#FFFFFF' : '#E2DFD2'} />
          )
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: ({focused }) => (
            <TabBarIcon name={focused ? 'calendar-clear' : 'calendar-clear-outline'} color={focused ? '#FFFFFF' : '#E2DFD2'} />
          ),
        }}
      />
    </Tabs>
  );
}
