import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Footer from '../Shared/Footer/Footer';

const Blog = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>

            <div className='bg-slate-200 '>


               <div className='lg:p-8 p-2 '>

               <div className='lg:mx-32  rounded-lg mx-2 p-4 bg-cyan-200 '>
               <div>
                    <div>
                        <h3 className='text-orange-700  font-bold my-3'>
                            Question Number:1
                        </h3>
                        <p>
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </p>
                    </div>
                    <div>
                        <h3 className='text-orange-700  font-bold my-3'>
                            Answer:
                        </h3>
                        <p>
                            An access token and a refresh token are commonly used in authentication and authorization protocols, such as OAuth, to grant and manage access to protected resources on a server.
                            <br />
                            Here's a breakdown of what they are and how they work:
                            <br />
                            Access Token: An access token is a credential that is issued by an authentication server after a user successfully authenticates and grants permission to an application. It represents the user's authorization to access specific resources or perform certain actions on behalf of the user. Access tokens have a limited lifespan, typically ranging from a few minutes to a few hours, after which they expire.
                            <br />
                            Refresh Token: A refresh token is a long-lived credential that is also issued by the authentication server alongside the access token. Its purpose is to obtain a new access token once the current one expires, without requiring the user to re-authenticate. Refresh tokens are typically valid for a longer period, such as days, weeks, or even months.
                            <br />
                            Authentication: The user provides their credentials (e.g., username and password) to the authentication server.

                            Token Issuance: Upon successful authentication, the server generates an access token and a refresh token, associating them with the user's session or account.

                            Access Token Usage: The client application includes the access token in each request it makes to the server to access protected resources. The server verifies the access token's validity, ensuring the user is authorized to perform the requested actions.

                            Access Token Expiration: Access tokens have a limited lifespan, and when they expire, the client receives an error response from the server.

                            Refresh Token Usage: If the access token expires, the client can use the refresh token to request a new access token from the authentication server without user involvement.

                            Token Refresh: The client sends the refresh token to the server, which verifies its validity. If valid, the server issues a new access token, and optionally, a new refresh token.
                        </p>
                    </div>

                </div>

                <div>
                    <div>
                        <h3 className='text-orange-700  font-bold my-3'>
                            Question Number:2
                        </h3>
                        <p>
                            Compare SQL and NoSQL databases?
                        </p>
                    </div>
                    <div>
                        <h3 className='text-orange-700  font-bold my-3'>
                            Answer:
                        </h3>
                        <p>
                            SQL (Structured Query Language) and NoSQL (Not only SQL) are two broad categories of database management systems that differ in their data models, storage architectures, and query languages. Here's a comparison between SQL and NoSQL databases:
                            <br />
                            SQL: SQL databases follow a rigid, predefined schema and use tables with rows and columns to store structured data. The data is organized into relations, and relationships between tables are established using primary and foreign keys. This structure enforces data consistency and integrity.
                            NoSQL: NoSQL databases offer flexible and schema-less data models. They can handle various types of data, including structured, semi-structured, and unstructured data. NoSQL databases include key-value stores, document stores, columnar databases, and graph databases, each suited for different types of data.
                            <br />
                            SQL: SQL databases traditionally scale vertically by adding more resources (e.g., memory, processing power) to a single server. Scaling horizontally across multiple servers can be challenging due to the rigid schema and tight relationships between tables.
                            NoSQL: NoSQL databases are designed for horizontal scalability, allowing easy distribution of data across multiple servers. They support sharding and replication to handle large data volumes and high traffic loads.
                            <br />
                            SQL: SQL databases use the SQL query language, which is standardized and widely adopted. SQL provides powerful declarative capabilities for querying and manipulating structured data. It supports complex joins, aggregations, and filtering operations.
                            NoSQL: NoSQL databases may use different query languages specific to their data models. For example, key-value stores often provide simple read and write operations based on the key, while document stores use query languages similar to JSON or XML. NoSQL databases may not support complex joins and aggregations as efficiently as SQL databases.
                            <br />
                            SQL: SQL databases prioritize data consistency and adhere to the ACID (Atomicity, Consistency, Isolation, Durability) properties. ACID ensures that transactions are reliable and maintain data integrity. However, achieving strong consistency may impact scalability.
                            NoSQL: NoSQL databases often prioritize scalability and performance over strong consistency. They may provide eventual consistency, where data changes propagate asynchronously, allowing for faster read and write operations. This approach is suitable for applications where immediate consistency is not critical, such as certain web or mobile applications.
                            <br />

                        </p>
                    </div>

                </div>

                <div>
                    <div>
                        <h3 className='text-orange-700  font-bold my-3'>
                            Question Number:3
                        </h3>
                        <p>
                            What is express js? What is Nest JS ?
                        </p>
                    </div>
                    <div>
                        <h3 className='text-orange-700  font-bold my-3'>
                            Answer:
                        </h3>
                        <p>

                            Express.js:
                            <br />
                            Express.js is a minimalist and unopinionated web framework for Node.js. It provides a simple and flexible set of features for building web applications and APIs. Express.js focuses on being lightweight and allows developers to have more control over the application's structure and components.
                            <br />
                            Nest.js:
                            <br />
                            Nest.js is a progressive, opinionated framework built on top of Express.js. It provides a higher-level structure and additional features to facilitate the development of scalable and maintainable server-side applications. Nest.js follows the architectural patterns of Angular, making it familiar for developers coming from the Angular ecosystem.
                            <br />

                        </p>
                    </div>

                </div>

                <div>
                    <div>
                        <h3 className='text-orange-700  font-bold my-3'>
                            Question Number:4
                        </h3>
                        <p>
                            What is MongoDB aggregate and how does it work?
                        </p>
                    </div>
                    <div>
                        <h3 className='text-orange-700  font-bold my-3'>
                            Answer:
                        </h3>
                        <p>
                            In MongoDB, the aggregate function is a powerful pipeline-based operation used for data aggregation and analysis. It allows you to process documents from a collection and perform complex transformations, computations, and aggregations on the data.
                            <br />
                            The aggregate operation takes an array of stages as input. Each stage defines a specific operation or transformation to be applied to the documents in the aggregation pipeline. These stages are processed sequentially, with the output of one stage serving as the input for the next stage.
                            <br />
                            Here's an overview of the basic components and stages commonly used in the MongoDB aggregate pipeline:
                            <br />
                            $match:
                            This stage filters documents based on specific criteria. It works similar to the find operation, allowing you to specify conditions using query operators.
                            <br />
                            $project:
                            The $project stage shapes the output documents by selecting or excluding specific fields, renaming fields, adding computed fields, or reshaping the document structure.
                            <br />
                            $group:
                            The $group stage performs group-based aggregations, allowing you to group documents by a specified field and calculate aggregate values for each group using various aggregation operators like $sum, $avg, $min, $max, and more.
                            <br />
                            $sort:
                            The $sort stage sorts the documents based on specified fields in ascending or descending order.
                            <br />
                            $limit and $skip:
                            The $limit and $skip stages control the number of documents to include in the result set. $limit restricts the output to a specified number of documents, while $skip allows skipping a specified number of documents from the beginning.
                            <br />
                            $lookup:
                            The $lookup stage performs a left outer join operation with another collection. It enriches the documents with data from the joined collection based on matching conditions.
                            <br />
                            $unwind:
                            The $unwind stage deconstructs an array field in the documents, creating separate documents for each element in the array. This is useful for performing aggregations on array values.
                            <br />
                        </p>
                    </div>
               </div>

                </div>
               </div>








            </div>

            <Footer></Footer>
        </div>
    );
};

export default Blog;