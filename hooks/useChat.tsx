import { Avatar, Chip, Stack, SxProps } from '@mui/material';

const useChat = () => {
   const containerStyles: SxProps = { 
    display: 'flex', 
    justifyContent: 'flex-start', 
    alignItems :'flex-start', 
    flexDirection: 'column' 
   };

   const Chat: React.FC<{label: string}> = ({label}) => (
    <Stack direction={"row"} spacing={"5px"} sx={{p: 2, alignItems: 'center'}}>
      <Avatar alt="Me" src="/images/zacari.png" />
      <Chip label={label} color="info" size="medium" sx={{borderBottomLeftRadius: "0px"}}/>
    </Stack>
    );


  return {
    containerStyles,
    Chat
  };
}

export default useChat;
