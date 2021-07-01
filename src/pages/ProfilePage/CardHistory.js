import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function CardHistory({restaurantName, createdAt, totalPrice}) {
    return (
<Card className={"root"}>
            <CardContent className={"details"}>
              <div className={"content"}>
                <div className={"name"}>
                  <Typography
                    className={"name"}
                    component="h8"
                    color="primary"
                    variant="h8"
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
                  <Box fontWeight="fontWeightBold" m={1}>
                    Subtotal R${totalPrice}
                  </Box>
                </Typography>
              </div>
            </CardContent>
          </Card>
    )
}
