---
title: "Postgres as an analytics database"
date: 2020-11-28T23:02:34+01:00
draft: true
---

When building software - It’s hard to do napkin math on what your system requirements will be. So the best practice when building something is getting a v0.1 up and running first and then iterate as needed.

To contain complexity and building the simplest solution first, while building June we picked Postgres as our database.

This post is a good introduction to analytics DBs for developers that only have experience building production apps


---

#### Table of contents
- [Transactional DBs](#transactional-dbs)
- [Problems with the current solutions](#analytics-dbs)
- [Postgres](#postgres)
- [Postgres ecosystem](#postgres-ecosystem)
- [Turning Postgres into an analytics DB](#turning-postgres-into-an-analytics-db)
- [Postgres ecosystem](#postgres-ecosystem)
- [Monitoring](#monitoring)
- [Keep it 100ms](#keep-it-100ms)
- [Quick wins](#quick-wins)
  - [N+1 Queries](#n1-queries)
  - [Adding the right indexes](#adding-the-right-indexes)
  - [JSON and Postgres](#json-and-postgres)
- [Citus](#citus)
- [Make data ingestion resilient](#make-data-ingestion-resilient)


---

## Transactional DBs
As a rule of thumb - if you just run SELECT * queries, the best technical choice is to use a transactional database

All of the apps you use on a daily basis use transactional databases. Main examples of Transactional databases are:
MongoDB - Encourages document-oriented storage (meaning data is not normalised) and uses its own query language that’s a fraction as expressive as SQL. It’s unsuitable for OLAP
FoundationDB - limits transactions to 5 seconds and supports only key/value storage. That effectively makes OLAP impossible, and specialises it for OLTP specifically.


## Analytics DBs

As a rule of thumb an analytics DB will be mostly running long running queries on few columns but many rows (millions of rows).

Main examples of analytical databases are:
Redshift - can crunch huge volumes of data into useful answers, but queries to it are slow (on the order of seconds or much longer), making it good for OLAP but not OLTP, which requires much faster responses.
Snowflake - also really good for OLAP and bad for OLTP

## Postgres

Postgres is an old school Relational Database (RDMS). Its development started in 1986 at Berkeley and it’s incredibly robust.

It’s not particularly specialised for an analytical (OLAP) or a transactional (OLTP) use case.

OLAP use case
Can handle complex OLAP queries in SQL (w/ joins, aggregations, Common Table Expressions, etc.) the underlying engine finds efficient ways to execute them. 

OLTP use case
Inserts, updates, deletes, and simple (well-indexed) selects are usually finishing in milliseconds, making it great for OLTP as well

Main drawback of Postgres is that if you have long running transactions - dead rows will only be killed when those transactions finish.

## Postgres Ecosystem

Postgres has a great ecosystem of extensions for most use cases you can imagine.

Citus Data
Scalable hybrid operational and analytics RDBMS you can use for real time analytics apps.
Timescale DB

A time series DBMS optimized for fast ingest and complex queries, based on PostgreSQL

ZomboDB
Interop layer for Elasticsearch + Postgres. Great for indexing and searching documents.

PostGIS
An extension to handle location data.

## Turning Postgres into an analytics DB

Let’s start at a high level. The main things you can do to optimise Postgres for a multi tenant OLAP use case are.

* Enable Column store
* Enable GIN indexes
* Distribute running read queries
* Make data ingestion resilient
* Separate tenants in shards

But starting right away with all of these optimisations is a lot of work and might be an overkill. It’s good to have in mind what you can do to improve things, but it’s not a good idea to start right away with a complex architecture.


## Monitoring

Add something like Datadog, New Relic or Honeycomb to your stack - it’s expensive but worth it.

## Keep it 100ms

2020 Saas products have sub 100ms response times for every endpoint

Adding this sort of instrumentation will make you find

## Quick wins

### N+1 Queries

### Adding the right indexes

### JSON and Postgres

Postgres stats for query planning aren't collected for JSONB fields, so moving things to the main model will speed things up
GiST indexes (Generalized Search Tree)
GIN stands for Generalized Inverted Index
GiST is a good﻿ use case if you have dynamic data that gets updated frequently
GIN indexes are a lot more heavy to build, but then a lot faster to read from

## Citus
Citus is used by companies like:
* Heap to manage 5PB of event data
* Pex - to index and store all of the videos of the internet
* Algolia - to run analytics on the queries people run

## Make data ingestion resilient
In case of downtime of our primary Postgres DB we'll have downtime we'd stop writing events

And all this functionality is provided in a distributed, highly scalable, elastic, fault-tolerant, and secure manner. 

To publish (write) and subscribe to (read) streams of events, including continuous import of your data from other systems.
To store streams of events durably and reliably for as long as you want.
To process streams of events as they occur or retrospectively.


This blog post is a the rough content of my talk at the #5 eFounders DevChat