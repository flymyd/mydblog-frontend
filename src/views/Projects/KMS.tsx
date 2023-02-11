import {FC} from "react";
import ToHomeRow from "@/components/ToHomeRow";
import FluidWrapper from "@/Framework/FluidWrapper";
import {Code, Title, Text, List} from "@mantine/core";
import Clipboard from 'clipboard';
import useTypewriter from "react-typewriter-hook"
import useWindowWidth from "@/hooks/useWindowWidth";

const toolsUrl = 'https://mydblog.obs.cn-east-3.myhuaweicloud.com/kms-activate.zip'
const gitUrl = 'https://github.com/jm33-m0/kms-activate';
const KMS: FC = () => {
  const windowWidth = useWindowWidth();
  const server1 = useTypewriter("van.ac.cn");
  const copy = new Clipboard('.copy-uuid');
  const kmsCmd = `slmgr -skms van.ac.cn\nslmgr -ato`
  return (
    <div style={{minHeight: '100vh'}}>
      <ToHomeRow/>
      <FluidWrapper>
        <Title order={1} className="mb-3 mt-3">KMS在线激活服务器</Title>
        <div className="flex flex-row mb-3">
          <Text fz="lg">域名（点击复制）：</Text>
          <a className="copy-uuid cursor-pointer" data-clipboard-text="van.ac.cn">
            <Text fs="italic" fz="lg" td="underline" c="blue">{server1}</Text>
          </a>
        </div>
        <Title order={3} className="mb-3">使用方法</Title>
        <Title order={4} className="mb-3">在命令行中激活Windows</Title>
        <Text className="mb-3">
          按Win+X然后按A，以管理员身份打开PowerShell或命令提示符，下面的命令每复制一行就回车执行一次，弹出信息框后可继续复制执行。
        </Text>
        <Code block className="mb-3">
          {kmsCmd}
        </Code>
        <Title order={4} className="mb-3">使用软件一键激活</Title>
        <div className="flex flex-row mb-3" style={{flexWrap: 'wrap'}}>
          <Text>本工具为开源项目</Text>
          <Text fs="italic" td="underline" c="blue">
            <a href={gitUrl} target="_blank">{gitUrl}</a>
          </Text>
          <Text>的v1.4.3原版文件，安全无毒，请放心使用。</Text>
          <Text>下载后请解压并执行kms-activate.exe，并在KMS Server一栏填入van.ac.cn然后点击Activate即可。</Text>
        </div>
        <Text fz="lg" fw={700} td="underline" c="blue" className="mb-7">
          <a href={toolsUrl}>点我下载</a>
        </Text>
        <div className="mb-7">
          <Title order={5}
                 className="mb-3">小站维护服务器不易，如果觉得该服务对你有帮助，还请老爷扫描二维码打赏一个馒头~</Title>
          <img src={import.meta.env.VITE_OBS_URL + '8588f197-8812-4f8a-8845-2a05aeb0ef09'}
               style={{width: windowWidth < 768 ? '100%' : '60%'}}/>
        </div>
      </FluidWrapper>
    </div>
  )
};
export default KMS;