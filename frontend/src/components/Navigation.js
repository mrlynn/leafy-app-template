import { SideNav, SideNavGroup, SideNavItem } from '@leafygreen-ui/side-nav';

export default function Navigation ({ className }) {
  return (
    <SideNav className={className}>
      <SideNavItem>Overview</SideNavItem>
      <SideNavItem>Introduction</SideNavItem>
      <SideNavItem> 
        Android SDK
        <SideNavItem>Install MongoDB Community Edition</SideNavItem>
        <SideNavGroup header="Fundamentals" collapsible>
          <SideNavItem active>
            Upgrade MongoDB Community to MongoDB Enterprise
          </SideNavItem>
          <SideNavItem>Verify Integrity of MongoDB Packages</SideNavItem>
          <SideNavGroup header="Preferences">
            <SideNavItem>Privacy</SideNavItem>
            <SideNavItem>Security</SideNavItem>
          </SideNavGroup>
        </SideNavGroup>
      </SideNavItem>
    </SideNav>
  );
}