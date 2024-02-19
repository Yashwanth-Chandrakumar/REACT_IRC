import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'


export default function CardComp() {
  return (
      <div>
        CardComp
          <Card>
              <CardMedia sx={{height:140}} image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRcbLjcZKWWHRRpf5gdOSCI78jLz3gpNgL67AcTD3zFE-zU_GTG"   />
              <CardContent>
                  <Typography>
                      Card test
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button>Share</Button>
              </CardActions>
          </Card>
      </div>
  );
}
