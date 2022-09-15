import { Box, LinearProgress, Typography } from "@mui/material";

const Language = (props:{
        name:string,
        code:string,
        proficiency:number,
        evaluation:string
        })=>{
            
    return (
    <Box sx={{ ml:14, mr:7, mt:2,pl:1, pr:1, position: 'relative', display: 'block' }}>
      <LinearProgress color="inherit" variant="determinate" value={props.proficiency}/>
      <Box
        sx={{
          top: 0,
          left: -60,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
        }}
      >
        <Typography variant="body1" component="div">
          {props.name}
        </Typography>
      </Box>
    </Box>
    );
}
export default Language;