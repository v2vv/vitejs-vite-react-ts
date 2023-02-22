import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { marked } from 'marked';

const html = marked.parse('#### Marked in Node.js\n\nRendered by **marked**.');

export default function TabsBasic() {
  return (
    <Tabs aria-label="Basic tabs" defaultValue={0} sx={{ borderRadius: 'lg' }}>
      <TabList>
        <Tab>First tab</Tab>
        <Tab>Second tab</Tab>
        <Tab>Third tab</Tab>
      </TabList>
      <TabPanel value={0} sx={{ p: 2 }}>
        <b>First</b> tab panel
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </TabPanel>
      <TabPanel value={1} sx={{ p: 2 }}>
        <b>Second</b> tab panel
      </TabPanel>
      <TabPanel value={2} sx={{ p: 2 }}>
        <b>Third</b> tab panel
      </TabPanel>
    </Tabs>
  );
}
