# GraphQL and NestJS Building Modern APIS
guide to transition from REST to a more efficcient and typed data flow
##### Rest challenges
What problems are we trying to solve?
##### Graphql fundamentals
understanding the core concepts
##### key concepts
Schemas Queries, Mutations, Subscriptions
##### Graqlh in netsj
Perfect combinations robus developtmnt
##### step by step
building a graphql api wit nest
# Common challeges with rest apis

## over-fetching
endpoints returns more data than client needs

## under-fetching
multiple request needed for completr data

## multiple endpoints
Complex managements of hundredes of routes

## versioning
v1,v2,complicates API maintance

# What is GraphQL?
A query language for APIS and runtime for processing those queries with your existing data

Not a database or language-specific framework

Clinen request exactly the data it needs, no moe , no less

# The jey principle: client has control
# rest
Server defines response structure
# graphql
Client specifies response structure

# Graphl vs Rest: Fundamentals differences

# Endpoint

Rest: multiple endpoints
graphql: single / graphql endpoint

# typing

Rest: optional
graphql: built-in strit type system
# data structure

Rest: defined by server
GraphQl: defined by client query 

# versioning

# key concept 1 : the schema

Contract between client and server
defines all api capabilites
written using schema definition language (sdl)

type book {
    id: ID!
    tittle: String!
    author: String
}
# key concept 2: queries

client query
query {
    books {
        title
        author 
    }
}

# key concept 3: mutations


used to write or modify data
retunrs modified data
create, update, delete operatins

# key concept 4: Subcriptions
# client subcribes
web socket connection established
# event occurs
data changes on server
# real-time update
client receives notification

# graphql meeets netsj
## firt-class integration
built- in support for GraphQL
## modular arquitecture
perfect fit for graql structure
# decoratos typescript
# code-first vs schema-first
write .graphql schema manually 
Implement code based on schema
## code-first( recomend)
use typescrript decorators
schema generated autoamtically

# install dependencia

npm install @nestjs/graphql @nestjs/apollo\apollo-server-express graphql

## step 2: configure graphql module

imports: [
    GraphQLMpdule.forRoot({
        driver:
    })
]
## step 3: create a resolver
similar to rest controller
handle queries and mutations
generatedd with @Resolver()
## step 4: create an "object type"
Define data structure with decorators
replaces manual sdl writiing
typescript classes become GraphQl types
## implement a query
en el resolver 
@Query decorator epres
## step 6: implement a mutation
@mutation() for creating daa, @Args*() for input
## The importance of services
# resolver
handler GraphQL operations
# services
Contains business logic

# database
data persistence

# conclusion and final benefict

## efficiency
clients get only needed data
## strong typing
end-to-end data consistency
## developer experience
autocomplete, validation, clear structure
## frictionless evolution
add fiels 

