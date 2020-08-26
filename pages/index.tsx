import Head from 'next/head'
import {
  Button,
  Box,
  Flex,
  Heading,
  Text,
  Image
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
    <Box
      backgroundColor="black"
      color="white"
      >

    <Head>
      
    </Head>

    <main>
      <Box 
        height="600px"
        width="100%"
        backgroundImage="url('https://images.wagwalkingweb.com/media/daily_wag/sense_guides/what-can-dogs-see-in-the-dark/hero/what-can-dogs-see-in-the-dark_oANYshk.jpg')"
        backgroundPosition="right"
        backgroundRepeat="no-repeat"
        m={[2, 4, 6, 8]}
        p={[2, 4, 6, 8]}
      >
        <Box
          width="45%"
        >
        <Heading
          fontSize={["xl", "2xl", "4xl", "6xl"]}
          p={[1, 2, 3, 4]}>        
          {data.title1}
        </Heading>

        <Text
          fontSize={["sm", "md", "lg", "xl"]}
          p={[1, 2, 3, 4]}
          color="#FBD38D"       
        >
          {data.article1}
        </Text>
        </Box>
        
      </Box>

      <Box 
        height="600px"
        width="100%"
        m={[2, 4, 6, 8]}
        p={[2, 4, 6, 8]}
      >
        <Box
          pl="50%"
          pr="10%"

        >
        <Heading
          fontSize={["xl", "2xl", "4xl", "6xl"]}
          p={[1, 2, 3, 4]}>          
          {data.title2}
        </Heading>

        <Text
          fontSize={["sm", "md", "lg", "xl"]}
          p={[1, 2, 3, 4]}
          color="#EDF2F7"       
        >
          {data.article2a}
        </Text>
        <Text
          fontSize={["sm", "md", "lg", "xl"]}
          p={[1, 2, 3, 4]}
          color="#EDF2F7"       
        >
          {data.article2b}
        </Text>
        </Box>
        
      </Box>

      <Box 
        height="600px"
        width="100%"
        m={[2, 4, 6, 8]}
        p={[2, 4, 6, 8]}
      >
        <Box
          width="45%"
        >
        <Heading
          fontSize={["xl", "2xl", "4xl", "6xl"]}
          p={[1, 2, 3, 4]}>         
          {data.title3}
        </Heading>

        <Text
          fontSize={["sm", "md", "lg", "xl"]}
          p={[1, 2, 3, 4]}
          color="#CEEDFF"       
        >
          {data.article3}
        </Text>
        </Box>
        
      </Box>
       
    </main>

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>

    <style jsx>{`
       
         
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid black;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: white;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

       
        .preview {
          ${preview && 'red'};
        }

      

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

<style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: black;
          color: grey;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
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
