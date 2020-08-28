import Head from 'next/head'
import {
  Button,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  Divider,
  Link
} from '@chakra-ui/core'
/*
 ** Import helpers and GetStaticProps type
 */
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from 'react-tinacms-github'
import { usePlugin } from 'tinacms'
import { GetStaticProps } from 'next'
import { BiBone } from "react-icons/bi"
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa"
import { SiRiot } from "react-icons/si"
import { FaPaw } from "react-icons/fa"





export default function Home({ file, preview }) {

  const formOptions = {
    label: 'Home Page',
    fields: [
      { name: 'title1',
       component: 'text'
      },
      { name: 'article1',
       component: 'textarea'
      },
      { name: 'title2',
       component: 'text'
      },
      { name: 'article2',
       component: 'textarea'
      },
      { name: 'title3',
       component: 'text'
      },
      { name: 'article3',
       component: 'textarea'
      }
    
    ],
  }

  /*
   ** Register a JSON Tina Form
   */

  
  const [data, form] = useGithubJsonForm(file, formOptions);

  usePlugin(form)




  useGithubToolbarPlugins()

  return (
  
  <div>
      <head>
      
      </head>
      

    <Box
      backgroundColor="black"
      color="white"
      pl="10%"
      pr="10%"
      >

      <header>
        <Flex mb="5%">          
            <Box width={['0%', 0.6, 0.6]} pt="1%">
              <Box as={FaPaw} fontSize={["0", "2xl", "3xl", "5xl"]} color="acert_red"/>
            </Box>
            <Box position="absolute" right="10%">
              <Heading textTransform="uppercase" fontSize={["0", "xs", "md", "xl"]} pt="5%">
                Nextgen identity & access management
              </Heading>
            </Box>
            <Box width={["100%", 0, 0]} pb="5%" pt="2%">
              <Stack isInline align="left">
                  <Box as={FaPaw} fontSize={["xl", "0", "0", "0"]} color="acert_red"/>
                <Heading  textTransform="uppercase" fontSize={["xs", "0", "0", "0"]} fontStyle="bold" pt="1%">
                  Nextgen identity & access management
                </Heading>
              </Stack>
            </Box>
          </Flex>
      </header>
      
      <main>
      
{/*Article 1*/}
        <Box 
          height="100%"
          width="100%"
          p="5% 0% 10% 0%" 
          display={{ md: "flex" }}
        >
          
            <Box width={['100%', 0.8, 0.8]}>
              <Heading  fontSize={["xl", "2xl", "4xl", "6xl"]}>     
                {data.title1}
              </Heading>

              <Text  fontSize={["sm", "md", "lg", "xl"]} color="#FFFAFF"  pt="5%">
                {data.article1}
              </Text>
            </Box>
        
{/*Image for middle and large screen size for article 1*/} 
              <Box width={[0, '100%', '100%']}>
                <Image src="\black-dog-in-the-dark.jpg" alt="black dog in the dark" />
              </Box>      
            </Box>

{/*Image for middle and large screen size article 1*/} 
            <Box width={['100%', 0, 0]}>
              <Image src="\black-dog-in-the-dark.jpg" alt="black dog in the dark" />
            </Box>


{/*Article 2*/}
        <Box height="100%" width="100%" p="5% 15% 5% 25%">
          <Box width="100%">
            <Heading fontSize={["xl", "2xl", "4xl", "6xl"]}>     
              {data.title2}
            </Heading>

            <Text fontSize={["sm", "md", "lg", "xl"]} color="#FFFAFF" pt="5%">
              {data.article2}
            </Text>
          </Box>
        </Box>

{/*Article 3*/}      
        <Box 
          height="100%"
          width="100%"
          p="5% 0% 10% 0%" 
          display={{ md: "flex" }}
        >
{/*Image for middle and large screen size article 3*/}       
          <Box width={['0%', "100%", "100%"]}>
            <Image src="https://us.123rf.com/450wm/damedeeso/damedeeso1609/damedeeso160900030/62512485-jack-russell-terrier-dog-isolated-on-black-dark-background-looking-at-you-frontal-isolated.jpg?ver=6" alt="A very sad russell terrier"/>
          </Box>
          
{/*Text Article 3*/}
          <Box width={['100%', 0.8, 0.8]}>
            <Heading fontSize={["xl", "2xl", "4xl", "6xl"]}>     
              {data.title3}
            </Heading>

            <Text fontSize={["sm", "md", "lg", "xl"]} color="#FFFAFF" pt="5%">
              {data.article3}
            </Text>
          </Box>
        </Box>


{/*Image for small screen article 3*/}
        <Box width={['100%', 0, 0]}>
        <Image src="https://us.123rf.com/450wm/damedeeso/damedeeso1609/damedeeso160900030/62512485-jack-russell-terrier-dog-isolated-on-black-dark-background-looking-at-you-frontal-isolated.jpg?ver=6" alt="A very sad russell terrier" /> 
        </Box>
        

{/*Article 4*/}
        <Box 
          height="100%"
          width="100%"
          p="5% 20% 5% 20%"           
        >
          <Box width="100%">
            <Heading
              fontSize={["xl", "2xl", "4xl", "6xl"]}
            >     
              {data.title4}
            </Heading>

            <Text
              fontSize={["sm", "md", "lg", "xl"]}
              color="#FFFAFF"
              pt="5%"      
            >
              {data.article4}
            </Text>
          </Box>
        </Box>


{/*Recommendation section for middle and large screen size*/}    
      <Box w={[0, "100%", "100%", "100%"]} backgroundColor="#0f0f0F" borderWidth="1px" rounded="lg" borderColor="#0F0F0F" mt="15%">
        <Box mb={[0, "5%", "5%", "5%"]} display={{base:"none", lg:"block"}} textAlign="center">
            <Heading fontSize={[0, "xl", "3xl", "5xl"]}>They Recommend Us</Heading>
          </Box>

        <Stack mt={[0, "5%", "5%", "5%"]} justify="space-around" align="center">
          
        <Box display={{ md: "flex" }} fontSize={[0, "md", "lg", "xl"]} >
            
            <Box p={[0, "2%", "2%", "2%"]}>
              <Image src="https://pbs.twimg.com/profile_images/964468428856872960/Mo11mN9b_400x400.jpg" alt="Fabien" rounded="full" w="180px" mx="auto"></Image>
              <Text textAlign="center" >Fabien</Text>
              <Text textAlign="center" color="acert_grey">CEO</Text>
              <Text textAlign="center">Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome.</Text>
            </Box>

            <Box p={[0, "2%", "2%", "2%"]}>
            <Image src="https://media-exp1.licdn.com/dms/image/C4D03AQHkci2rD306mw/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=fJ_iUaTVHajI120N_WG9_q_SXc1nN04CtgQZIsQoii8" alt="Smart trainee" rounded="full" w="180px" mx="auto"></Image>
              <Text textAlign="center" >François</Text>
              <Text textAlign="center" color="acert_grey">CEO</Text>
              <Text textAlign="center">Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome.</Text>
            </Box>

            <Box p={[0, "2%", "2%", "2%"]} display={{base:"none", lg:"block"}}>
              <Image src="\bernese-mountain-dog-wears-glasses.jpg" alt="Smart dog" rounded="full" w="180px" mx="auto"></Image>
              <Text textAlign="center" >Bandit</Text>
              <Text textAlign="center" color="acert_grey">CEO</Text>
              <Text textAlign="center">Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome.</Text>
            </Box>

            <Box p={[0, "2%", "2%", "2%"]}>
              <Image src="\Kevin-Mitnick-crop.jpg" alt="Kevin Mitnick" rounded="full"  w="180px" mx="auto"></Image>
              <Text textAlign="center" >Kevin</Text>
              <Text textAlign="center" color="acert_grey">CEO</Text>
              <Text textAlign="center">Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome.</Text>
            </Box>
            
          </Box>
        </Stack>
      </Box>


{/*Recommendation section for small screen size*/}
      <Box 
        fontSize={["sm", 0, 0, 0]}
        mb={['15%', "0%", "0%", "0%"]}
        mt={['5%', "0%", "0%", "0%"]}
        p={['5%', "0%", "0%", "0%"]}
        borderWidth="1px" rounded="lg" borderColor="#0F0F0F"
      >
          <Box display={{base:"none", lg:"block"}} textAlign="center" pb={['10%', "0%", "0%", "0%"]}>
            <Heading fontSize={["xl", 0, 0, 0]}>They Recommend Us</Heading>
          </Box>
                 
          <Box display={{ md: "flex" }} mb={['5%', "0%", "0%", "0%"]}>
            <Box pr={['5%', "0%", "0%", "0%"]} lineHeight="110%" textAlign="center" >
              <Image src="https://pbs.twimg.com/profile_images/964468428856872960/Mo11mN9b_400x400.jpg" alt="Fabien" rounded="full" p={['1%', "0%", "0%", "0%"]} width={['200px', "0%", "0%", "0%"]} m="auto"></Image>
              <Text>Fabien</Text>
              <Text color="acert_grey">CEO</Text>
            </Box>
            <Box>
              <Text>Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome.</Text>
            </Box>
          </Box>

          <Box display={{ md: "flex" }} mb={['5%', "0%", "0%", "0%"]}>
            <Box pr={['5%', "0%", "0%", "0%"]} lineHeight="110%" textAlign="center" >
              <Image src="https://media-exp1.licdn.com/dms/image/C4D03AQHkci2rD306mw/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=fJ_iUaTVHajI120N_WG9_q_SXc1nN04CtgQZIsQoii8" alt="Smart trainee" rounded="full" p={['1%', "0%", "0%", "0%"]} width={['200px', "0%", "0%", "0%"]} m="auto"></Image>
              <Text>François</Text>
              <Text color="acert_grey">CEO</Text>
            </Box>
            <Box>
              <Text>Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome.</Text>
            </Box>
          </Box>

          <Box display={{ md: "flex" }} mb={['5%', "0%", "0%", "0%"]}>
            <Box pr={['5%', "0%", "0%", "0%"]} lineHeight="110%" textAlign="center" >
              <Image src="\bernese-mountain-dog-wears-glasses.jpg" alt="Smart dog" rounded="full" p={['1%', "0%", "0%", "0%"]} width={['200px', "0%", "0%", "0%"]} m="auto"></Image>
              <Text>Bandit</Text>
              <Text color="acert_grey">CEO</Text>
            </Box>
            <Box>
              <Text>Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome.</Text>
            </Box>
          </Box>

          <Box display={{ md: "flex" }} mb={['5%', "0%", "0%", "0%"]}>
            <Box pr={['5%', "0%", "0%", "0%"]} lineHeight="110%" textAlign="center" >
              <Image src="\Kevin-Mitnick-crop.jpg" alt="Kevin Mitnick" rounded="full" p={['1%', "0%", "0%", "0%"]} width={["200px", "0%", "0%", "0%"]} m="auto"></Image>
              <Text>Kevin</Text>
              <Text color="grey">CEO</Text>
            </Box>
            <Box>
              <Text>Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome, Nextgen is awsome.</Text>
            </Box>
          </Box>

      </Box>


{/*Small dog picture on the top of social medias*/}
        <Box width={["65%", "40%", "25%"]} ml="auto" mr="auto" mt="10%" pr={["15%", "7%", "5%"]}>
          <Image src="https://ekladata.com/9XM16UlLM0ntfHrK9wGzOQxB3Dw.jpg" alt="Dog with red collar" /> 
        </Box>

{/*Social medias*/}
        <Stack w="100%" mt="3" justify="space-around" align="center" h="24">
        <Box mb="2" display={{base:"none", lg:"block"}}>
          <Text textTransform="uppercase" textAlign={{xs:"right", lg:"left"}}> Join the discussion</Text>
        </Box>
        <Stack isInline w="40%" justify="space-around">
          <Link href="https://www.linkedin.com" >
            <Box as={FaLinkedin} size="44px" mx={{xs:"1", lg:"3"}}/>
          </Link>
          <Link href="https://www.github.com">
            <Box as={FaGithub} size="44px" mx={{xs:"1", lg:"3"}}/>
          </Link>
          <Link href="https://www.twitter.com">
            <Box as={FaTwitter} size="44px" mx={{xs:"1", lg:"3"}}/>
          </Link>
          <Link href="https://www.riot.com">
            <Box as={SiRiot} size="44px" mx={{xs:"1", lg:"3"}}/>
          </Link>
        </Stack>
      </Stack>

      

      </main>

      <footer>
        <Flex pt="10%" pb="2%" fontSize={["md", "lg", "xl", "2xl"]} >
          <span>WOOF</span>
          <Divider orientation="vertical" borderColor="white"/>
          <span>the lovely companion of acert.io</span>       
          <Box position="absolute" right="10%">
            <Stack isInline fontSize={["0", "lg", "xl", "2xl"]}>
              <Text>Made with </Text>
              <Box as={BiBone} fontSize={["0", "xl", "2xl", "4xl"]}/>
            </Stack>       
          </Box>
        </Flex>
        
             
          <Box pb={['5%', "0%", "0%", "0%"]}>
            <Stack isInline fontSize={["md", "0", "0", "0"]}>
              <Text>Made with </Text>
              <Box as={BiBone} fontSize={["lg", "0", "0", "0"]}/>
            </Stack>             
          </Box>
       
      </footer>

     
 
    </Box>
  </div>
   
  )
}

/*
 ** Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/home.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/home.json',
        data: (await import('../content/home.json')).default,
      },
    },
  }
}
