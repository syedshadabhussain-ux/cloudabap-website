import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import CodeBlock from "@/components/tutorials/CodeBlock";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import ThinkLikeCompiler from "@/components/tutorials/ThinkLikeCompiler";
import CDSViewEntitySidebar from "@/components/tutorials/CDSViewEntitySidebar";
import RealWorldExample from "@/components/tutorials/RealWorldExample";
import BestPractice from "@/components/tutorials/BestPractice";
import CommonMistakes from "@/components/tutorials/CommonMistakes";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";
import PrevNext from "@/components/tutorials/PrevNext";

export default function Page() {
  return (
    <TutorialLayout
      title="Association vs SQL JOIN in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="70 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      {/* Hero */}

      <ImageBlock
        src="/images/rap/cds-view-entity/association/association-master.webp"
        alt="Association vs SQL JOIN"
        caption="Understand how Associations are transformed into SQL JOINs, how the CDS compiler traverses the association graph and why Associations are preferred in SAP's Virtual Data Model."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association Masterclass">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Lesson 7 of 15 – Association vs SQL JOIN
          </h3>

          <p className="mt-3 text-slate-700">
            This is one of the most important lessons in the entire Association
            Masterclass.
          </p>

          <p className="mt-3 text-slate-700">
            Almost every developer asks the same question.
          </p>

          <blockquote className="mt-5 rounded-lg border-l-4 border-blue-600 bg-white px-6 py-4 text-lg italic text-slate-700">
            "If Associations eventually become SQL JOINs, why doesn't SAP simply
            ask us to write JOINs?"
          </blockquote>

          <p className="mt-5 text-slate-700">
            The answer lies in how the CDS compiler understands business
            relationships, generates SQL and eliminates unnecessary JOINs.
          </p>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Learning Objectives">
        <ul className="list-disc space-y-3 pl-6">
          <li>Understand the difference between Associations and SQL JOINs.</li>

          <li>Learn how the CDS compiler generates SQL.</li>

          <li>Understand why SAP prefers Associations in Interface Views.</li>

          <li>Understand Join Elimination.</li>

          <li>Prepare for ON vs WHERE in the next lesson.</li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Introduction">
        <p>
          One of the biggest misconceptions in ABAP CDS is believing that an
          Association is simply another way of writing a SQL JOIN.
        </p>

        <p>
          Although Associations eventually become SQL JOINs during execution,
          they are fundamentally different concepts.
        </p>

        <p>
          A SQL JOIN tells the database exactly how data should be retrieved.
        </p>

        <p>
          An Association tells the CDS compiler how business objects are
          related.
        </p>

        <p>
          The compiler then decides whether a SQL JOIN is actually required.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        This is the biggest mindset shift in ABAP CDS.
        <br />
        <br />
        SQL JOIN is an implementation.
        <br />
        <br />
        Association is business metadata.
        <br />
        <br />
        The CDS compiler converts business metadata into SQL only when required.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association vs SQL JOIN">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Association</th>

              <th className="border px-4 py-3 text-left">SQL JOIN</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Defines business relationships.
              </td>

              <td className="border px-4 py-3">Retrieves data.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Lazy by design.</td>

              <td className="border px-4 py-3">Executed immediately.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Reusable by many consumers.</td>

              <td className="border px-4 py-3">Specific to one query.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Compiler decides SQL.</td>

              <td className="border px-4 py-3">Developer decides SQL.</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Let's Think Like the CDS Compiler">
        <p>Consider the following CDS View.</p>

        <CodeBlock
          title="CDS View"
          language="ABAP CDS"
          code={`define view entity ZC_SalesOrderOverview

  as select from ZI_SalesOrder

{

    key SalesDocument,

    SalesDocumentType,

    SalesOrganization,

    CreationDate,

    SoldToParty,

    _Customer.Customer,

    _Item.Material,

    _Item._Text.ProductName

}`}
        />

        <p>Most developers read this from top to bottom.</p>

        <p>The CDS compiler does not.</p>

        <p>
          It first builds a graph of business relationships and then determines
          which branches of that graph are actually required.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Compiler Step 1"
        thought="The compiler starts from the root CDS View and builds a graph of all requested Associations."
        steps={[
          "Read the root CDS View.",
          "Locate every requested Association.",
          "Build the association graph.",
          "Ignore unused Associations.",
          "Prepare SQL generation.",
        ]}
        decision="The compiler does not generate SQL in the order fields are written. It traverses the association graph."
        performanceTip="This graph-based approach allows SAP to eliminate unnecessary JOINs before SQL reaches SAP HANA."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="The Association Graph">
        <CodeBlock
          title="Business Relationship Graph"
          language="Text"
          code={`ZI_SalesOrder
   │
   ├── _Customer
   │
   └── _Item
          │
          └── _Text`}
        />

        <p>This graph represents business relationships—not SQL.</p>

        <p>
          The compiler traverses only the branches required by the current
          consumer.
        </p>

        <p>
          For example, if the Product Text is never requested, the
          <strong> _Text</strong> branch disappears completely before SQL is
          generated.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Step 1 - The Root Object">
        <p>Every CDS View starts from a single root data source.</p>

        <CodeBlock
          title="Root Object"
          language="ABAP CDS"
          code={`define view entity ZC_SalesOrderOverview

as select from ZI_SalesOrder`}
        />

        <p>The compiler first reads only the root object.</p>

        <p>At this moment, the generated SQL is conceptually equivalent to:</p>

        <CodeBlock
          title="Generated SQL"
          language="SQL"
          code={`SELECT

    SalesDocument,
    SalesDocumentType,
    SalesOrganization,
    CreationDate,
    SoldToParty

FROM ZI_SALESORDER`}
        />

        <p>
          Notice that no JOIN has been generated yet because the compiler has
          not encountered any navigated Associations.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Step 2 - Navigating the Customer Association">
        <p>The compiler now encounters:</p>

        <CodeBlock
          title="Path Expression"
          language="ABAP CDS"
          code={`_Customer.Customer`}
        />

        <p>It immediately asks two questions:</p>

        <ol className="mt-4 list-decimal space-y-3 pl-6">
          <li>
            Where does <code>_Customer</code> come from?
          </li>
          <li>Which Association defines this relationship?</li>
        </ol>

        <p>The compiler opens the Association definition.</p>

        <CodeBlock
          title="Association"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer

on $projection.SoldToParty = _Customer.Customer`}
        />

        <p>
          Because the Association is <strong>[0..1]</strong>, the compiler knows
          that each Sales Order can match at most one Customer.
        </p>

        <CodeBlock
          title="Conceptual SQL"
          language="SQL"
          code={`LEFT OUTER MANY TO ONE JOIN I_CUSTOMER

ON

ZI_SALESORDER.SOLDTOPARTY = I_CUSTOMER.CUSTOMER`}
        />
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Why MANY TO ONE?">
        <p>This is one of the most misunderstood topics in ABAP CDS.</p>

        <p>
          Many developers incorrectly think the compiler generates a simple LEFT
          OUTER JOIN.
        </p>

        <p>Think from the perspective of the left side of the relationship.</p>

        <CodeBlock
          title="Business Relationship"
          language="Text"
          code={`Sales Orders

Order 100

↓

Customer 100

Order 101

↓

Customer 100

Order 102

↓

Customer 100`}
        />

        <p>Notice what is happening.</p>

        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Many Sales Orders</li>
          <li>One Customer</li>
        </ul>

        <p>
          From the SQL optimizer's perspective, this is a
          <strong> MANY TO ONE</strong> relationship.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Step 3 - Navigating the Item Association">
        <p>Next, the compiler encounters:</p>

        <CodeBlock
          title="Path Expression"
          language="ABAP CDS"
          code={`_Item.Material`}
        />

        <p>It now opens the second Association.</p>

        <CodeBlock
          title="Association"
          language="ABAP CDS"
          code={`association [0..*] to ZI_SalesOrderItem as _Item

on $projection.SalesDocument = _Item.SalesDocument`}
        />

        <p>Unlike the Customer Association, this relationship is TO MANY.</p>

        <CodeBlock
          title="Generated SQL"
          language="SQL"
          code={`LEFT OUTER JOIN ZI_SALESORDERITEM

ON

ZI_SALESORDER.SALESDOCUMENT

=

ZI_SALESORDERITEM.SALESDOCUMENT`}
        />

        <p>
          Notice that the compiler no longer generates a
          <strong> MANY TO ONE</strong> JOIN because multiple Item records may
          exist for a single Sales Order.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Step 4 - Nested Association Navigation">
        <p>Finally, the compiler encounters:</p>

        <CodeBlock
          title="Nested Path Expression"
          language="ABAP CDS"
          code={`_Item._Text.ProductName`}
        />

        <p>This is not a direct navigation from Sales Order to Product Text.</p>

        <p>Instead, the compiler follows the Association graph.</p>

        <CodeBlock
          title="Association Graph"
          language="Text"
          code={`Sales Order

↓

Item

↓

Product Text`}
        />

        <p>
          It first materializes the Item Association and only then navigates the
          Product Text Association.
        </p>

        <p>
          This exactly mirrors the business relationships defined in the Virtual
          Data Model.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Compiler Step 2"
        thought="The compiler traverses the Association graph one relationship at a time. It never jumps directly to nested business objects."
        steps={[
          "Resolve _Customer.",
          "Generate Customer JOIN.",
          "Resolve _Item.",
          "Generate Item JOIN.",
          "Resolve _Text from Item.",
          "Generate Product Text JOIN.",
        ]}
        decision="The compiler generates JOINs by traversing the Association graph, not by following the visual order of fields in the SELECT list."
        performanceTip="Nested Associations are resolved incrementally. Each JOIN is generated only when its branch of the graph is actually required."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Step 5 - Session Variables Become Native HANA Functions">
        <p>
          One of the most interesting compiler optimizations happens when you
          use session variables inside an Association.
        </p>

        <p>Consider the following Association:</p>

        <CodeBlock
          title="Association with Session Variable"
          language="ABAP CDS"
          code={`association [0..1] to I_ProductText as _Text

on  $projection.Material = _Text.Product
and _Text.Language = $session.system_language`}
        />

        <p>
          You never wrote any HANA-specific SQL. However, during SQL generation,
          the CDS compiler converts the session variable into the corresponding
          native HANA function.
        </p>

        <CodeBlock
          title="Conceptual Generated SQL"
          language="SQL"
          code={`LEFT OUTER MANY TO ONE JOIN I_PRODUCTTEXT

ON

ITEM.MATERIAL = PRODUCTTEXT.PRODUCT

AND PRODUCTTEXT.LANGUAGE =
SESSION_CONTEXT('LOCALE_SAP')`}
        />

        <p>
          This transformation is completely automatic and allows CDS Views to
          remain database independent while still executing efficiently on SAP
          HANA.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Automatic Client Handling">
        <p>
          Another optimization performed by the CDS compiler is automatic client
          handling.
        </p>

        <p>
          Notice that none of the Associations defined earlier contain the
          <strong>MANDT</strong> field.
        </p>

        <p>
          Yet the generated SQL automatically includes client conditions similar
          to the following:
        </p>

        <CodeBlock
          title="Conceptual SQL"
          language="SQL"
          code={`ON

HEADER.MANDT = CUSTOMER.MANDT

...

WHERE

HEADER.MANDT = SESSION_CONTEXT('CDS_CLIENT')`}
        />

        <p>
          The compiler injects these conditions automatically, ensuring that the
          query retrieves data only from the current client.
        </p>

        <ArchitectNote>
          As an ABAP Cloud developer, you should never manually add client
          conditions to Associations. Client handling is managed automatically
          by the CDS compiler.
        </ArchitectNote>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Join Elimination - One of the Biggest Advantages of Associations">
        <p>
          Now let's look at one of the most powerful optimizations performed by
          the CDS compiler.
        </p>

        <p>Consider the following CDS View:</p>

        <CodeBlock
          title="CDS View"
          language="ABAP CDS"
          code={`{

key SalesDocument,

_Customer.Customer,

_Item.Material,

_Item._Text.ProductName

}`}
        />

        <p>
          The compiler generates JOINs for Customer, Item and Product Text
          because all three Associations are navigated.
        </p>

        <p>Now remove only one field.</p>

        <CodeBlock
          title="Remove Product Text"
          language="ABAP CDS"
          code={`{

key SalesDocument,

_Customer.Customer,

_Item.Material

}`}
        />

        <p>
          Since <code>_Item._Text.ProductName</code> is no longer requested, the
          compiler removes the entire Product Text branch before SQL is
          generated.
        </p>

        <p>No unnecessary JOIN is executed.</p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="The Association Graph Shrinks Automatically">
        <p>Initially, the compiler builds the following graph:</p>

        <CodeBlock
          title="Full Graph"
          language="Text"
          code={`ZI_SalesOrder
   │
   ├── _Customer
   │
   └── _Item
          │
          └── _Text`}
        />

        <p>
          After removing <code>_Item._Text.ProductName</code>, the graph
          becomes:
        </p>

        <CodeBlock
          title="Optimized Graph"
          language="Text"
          code={`ZI_SalesOrder
   │
   ├── _Customer
   │
   └── _Item`}
        />

        <p>
          Remove <code>_Item.Material</code> as well.
        </p>

        <CodeBlock
          title="Further Optimized Graph"
          language="Text"
          code={`ZI_SalesOrder
   │
   └── _Customer`}
        />

        <p>Finally, remove the Customer field.</p>

        <CodeBlock title="Final Graph" language="Text" code={`ZI_SalesOrder`} />

        <p>
          At this point, every Association has disappeared from the generated
          SQL because none of them are required by the consumer.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Join Elimination"
        thought="Only Associations that contribute requested fields should become SQL JOINs."
        steps={[
          "Build the complete Association graph.",
          "Identify every navigated path expression.",
          "Discard unused branches.",
          "Generate SQL only for remaining branches.",
          "Optimize the final execution plan.",
        ]}
        decision="Unused Associations never become SQL JOINs."
        performanceTip="This optimization is known as Join Elimination and is one of the primary reasons SAP recommends Associations for reusable Interface Views."
      />

      {/* ------------------------------------------------------------ */}

      <RealWorldExample title="One CDS View, Many Consumers">
        Imagine a released Interface View consumed by multiple applications.
        <br />
        <br />
        • A Fiori List Report displays only Sales Order Number and Customer.
        <br />
        • A RAP service additionally requires Item information.
        <br />
        • An Analytical Query requires Product Text as well.
        <br />
        <br />
        All three consumers use the same CDS View.
        <br />
        <br />
        The difference is that each consumer navigates a different part of the
        Association graph.
        <br />
        <br />
        The CDS compiler generates only the JOINs required for that specific
        consumer, making the Virtual Data Model highly reusable.
      </RealWorldExample>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        <strong>Technical Architect Insight</strong>
        <br />
        <br />
        Associations model a graph of business relationships.
        <br />
        <br />
        The CDS compiler traverses only the branches required by the current
        consumer.
        <br />
        <br />
        This is fundamentally different from writing a SQL statement where every
        JOIN is fixed by the developer.
        <br />
        <br />
        This graph-based architecture is one of the key design principles behind
        SAP's Virtual Data Model (VDM).
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <BestPractice>
        Prefer Associations in reusable Interface Views.
        <br />
        <br />
        Define business relationships once and allow different consumers to
        navigate only the data they require.
        <br />
        <br />
        This improves maintainability, readability and allows the CDS compiler
        to perform optimizations such as Join Elimination automatically.
      </BestPractice>

      {/* ------------------------------------------------------------ */}

      <CommonMistakes
        items={[
          "Thinking the compiler generates JOINs in the order fields appear in the SELECT list.",
          "Assuming every Association always becomes a SQL JOIN.",
          "Manually adding client handling conditions.",
          "Believing Associations are just another syntax for SQL JOINs.",
        ]}
      />

      {/* ------------------------------------------------------------ */}

      <InterviewQuestion
        level="Experienced"
        question="What is Join Elimination in ABAP CDS?"
        answer="Join Elimination is a compiler optimization in which unused Association branches are removed before SQL is generated. Only Associations that contribute requested fields become SQL JOINs."
      />

      <InterviewQuestion
        level="Architect"
        question="Why does SAP recommend Associations instead of explicit JOINs in Interface Views?"
        answer="Associations model reusable business relationships rather than fixed SQL. Different consumers can navigate different Association branches, allowing the CDS compiler to generate only the required JOINs and optimize the execution plan."
      />

      {/* ------------------------------------------------------------ */}

      <KeyTakeaway>
        <p>Associations and SQL JOINs serve different purposes.</p>

        <p>
          Associations describe business relationships, while SQL JOINs retrieve
          data.
        </p>

        <p>
          The CDS compiler transforms Associations into SQL only when required,
          injects session and client handling automatically, and eliminates
          unnecessary JOINs before execution.
        </p>

        <p>
          This compiler-driven approach is one of the biggest advantages of
          SAP's Virtual Data Model and explains why Associations are preferred
          over explicit JOINs in reusable Interface Views.
        </p>

        <p>
          In the next lesson, we'll explore one of the most misunderstood topics
          in ABAP CDS:
          <strong> ON Condition vs WHERE Clause</strong>, including how filters
          change the generated SQL and why TO MANY Associations cannot be used
          in certain WHERE conditions.
        </p>
      </KeyTakeaway>

      {/* ------------------------------------------------------------ */}

      <PrevNext
        prevTitle="Lazy Loading"
        prevHref="/tutorials/rap/cds-view-entity/association-lazy-loading"
        nextTitle="Association vs JOIN"
        nextHref="/tutorials/rap/cds-view-entity/association-vs-join"
      />
    </TutorialLayout>
  );
}
