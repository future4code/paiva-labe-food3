import React from 'react'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {Card, CardContent} from './StyledCardHistory'

export default function CardHistory({restaurantName, createdAt, totalPrice}) {
    return (
<Card>
            <CardContent >
              <div className={"content"}>
                <div className={"name"}>
                  <Typography
                    className={"name"}
                    component="p"
                    color="primary"
                    variant="h6"
                  >
                    {restaurantName}
                  </Typography>
                </div>
                <p>
                  {new Date(createdAt).toLocaleString("pt-br", {
                    month: "long",
                    year: "numeric",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className={"controls"}>
                <Typography
                  className={"price"}
                  variant="body2"
                  color="textPrimary"
                  component="p"
                  fontWeight="fontWeightBold"
                >
                  <Box fontWeight="fontWeightBold" m={1}
                  >
                    Subtotal R${totalPrice}
                  </Box>
                </Typography>
              </div>
            </CardContent>
          </Card>
    )
}
