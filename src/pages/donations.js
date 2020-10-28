import React from 'react'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/Layout'
import DonationsPageQuery from '../queries/DonationsPageQuery'
import Markdown from '@input-output-hk/front-end-core-components/components/Markdown'
import Page from '../components/Page'

export default () => (
  <DonationsPageQuery
    render={(content) => (
      <Layout>
        <Page title={content.donations_page_title}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Markdown source={content.donations_page_content} />
            </Grid>
          </Grid>
        </Page>
      </Layout>
    )}
  />
)
