import { Button, Drawer, Radio, Space } from 'antd';
import { useState } from 'react';
import { Input } from 'antd';
const LeftDrawer = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}>
          
          <Radio value="right">right</Radio>
          
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Save Segment
        </Button>
      </Space>
      <Drawer 
        title="Saving Segment"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div style={{height:"100vh"}}>
        <p>Enter the name of the Segment</p>
        <Input placeholder="Name of the Segment" />
        <p>To Save your segment, you need to add the schemas to build query</p>
        <Radio value="left">User Traits</Radio>
        <Radio value="right">Group Traits</Radio>
        <br/>
        <div style={{bottom:"20px"}}>
        <Button type="primary">Save the  Segment</Button>
        <Button>Cancel </Button>
        </div>
        </div>

    
      </Drawer>
    </>
  );
};
export default LeftDrawer;