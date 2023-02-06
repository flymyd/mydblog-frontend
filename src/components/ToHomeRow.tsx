import {FC} from "react";
import {IconArrowLeft} from '@tabler/icons-react';
import {ActionIcon, Text} from "@mantine/core";
import {useNavigate} from "react-router-dom";

const ToHomeRow: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center p-3 cursor-pointer" onClick={()=>{navigate('/')}}>
      <ActionIcon size="sm">
        <IconArrowLeft></IconArrowLeft>
      </ActionIcon>
      <Text color="dimmed" size="sm">首页</Text>
    </div>
  )
}
export default ToHomeRow;