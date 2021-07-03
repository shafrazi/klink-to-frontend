import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import TouchAppIcon from '@material-ui/icons/TouchApp';

const LinkViewCount = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            LINK CLICKS
          </Typography>
          <Typography color="textPrimary" variant="h3">
            {props.data}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: indigo[600],
              height: 56,
              width: 56
            }}
          >
            <TouchAppIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default LinkViewCount;
