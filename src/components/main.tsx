import React from "react";
import Ico_Facebook from "../asesst/Icons/Ico_facebook";
import Ico_Instagram from "../asesst/Icons/Ico_instagram";
import Ico_Twitter from "../asesst/Icons/Ico_twitter";
import { fadein } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function Main(){
    return(
        <Flex dir={"column"} justify="around" css={{
            
            width:"100%",
            height:"100%",
            opacity:"0",
            animation:`1s ease-in 1s 1 both ${fadein}`,
            
        }}>

            <Text css={{
                display1:"800",
                paddingTop:"$7",
                "@bp2":{
                    display2:"800",
                },
                "@bp4":{
                    display3:"800"
                },
                "@bp5":{
                    headline1:"800"
                }
                
            }}>
                Transformez votre <br></br>
                Espace Urbain en un <br></br>
                Havre de Paix Vert.
            </Text>


            <Text css={{
                paddingTop:"$3",
                subhead1:"500",
                "@bp4":{
                    paddingTop:"$1",
                    subhead1:"400"
                }

            }}>
Chez Indoor Solar Garden, nous sommes animés par une passion pour la nature et un engagement envers l'innovation durable. Spécialisés dans la création de jardins d'intérieur alimentés par l'énergie solaire, nous apportons une touche de verdure dans les espaces urbains les plus compacts. Notre mission est de rendre le jardinage accessible et écologique, même en plein cœur de la ville.            </Text>

            <Flex css={{
                paddingTop:"$5"
            }}> 
                <Text cursor={"click"} css={{
                    
                    color:"$onPrimary",
                    backgroundColor:"$primary",
                    headline6:"600",
                    padding:"$1 $3",
                    borderRadius:"8px",
                    boxShadow:"$1dp",
                    "&:hover":{
                        color:"$primary",
                        backgroundColor:"$primary200",
                    },
                    "&:active":{
                        boxShadow:"none",
                        color:"$onPrimary",
                        backgroundColor:"$primary600",
                    }
                }}>
                    Nous contacter
                </Text>
                <Text cursor={"click"} css={{
                    border:"1px solid $primary",
                    color:"$primary",
                    backgroundColor:"$primary200",
                    headline6:"600",
                    padding:"$1 $3",
                    borderRadius:"8px",
                    marginLeft:"$3",
                    "&:hover":{
                        color:"$primary",
                        backgroundColor:"$primary600",
                    },
                    "&:active":{
                        boxShadow:"none",
                        color:"$onPrimary",
                    }
                }}>
                    En savoir plus
                </Text>
            </Flex>

            <Text css={{
                subhead2:"500",
                color:"$onBg800",
                paddingTop:"$2"
            }}>
            Plus d'excuse.
            </Text>

            <Flex justify={"end"} css={{
                width:"100%",
                // backgroundColor:"$onBg",
                // paddingTop:"$6",
                "& svg":{
                    fill:"$onBg800",
                    cursor:"pointer",
                    marginRight:"$3",
                    "&:hover":{
                        fill:"$onBg",
                        transform:"scale(1.1)",
                        // transition:"all 0.5s",
                        
                    }
                }
            }}>
                    <Ico_Facebook width="32" height="32"/>
                    <Ico_Instagram width="32" height="32"/>
                    <Ico_Twitter width="32" height="32"/>
            </Flex>

        </Flex>
    )
}


export default Main