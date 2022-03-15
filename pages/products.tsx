import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { ItemGrid } from 'knit-hutchida'
import { data as itemGridData } from 'knit-hutchida/lib/components/ItemGrid/data'
import { NextApiRequest, NextApiResponse } from "next";

import getData from './api/items'

export default function Home({
  allPostsData,
  productItems
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[],
  productItems: any
}) {

  return (
    <ItemGrid
      data={productItems}
      props={{ width: 250, height: 250 }}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  const response = await fetch('http://localhost:3001/api/items')
  const productItems = await response.json()
  return {
    props: {
      allPostsData,
      productItems
    }
  }
}