import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import TableBlock from "@/components/tutorials/TableBlock";
import CodeBlock from "@/components/tutorials/CodeBlock";
import BestPractice from "@/components/tutorials/BestPractice";
import CommonMistakes from "@/components/tutorials/CommonMistakes";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";
import PrevNext from "@/components/tutorials/PrevNext";
import RealWorldExample from "@/components/tutorials/RealWorldExample";
import CheatSheet from "@/components/tutorials/CheatSheet";
import CDSViewEntitySidebar from "@/components/tutorials/CDSViewEntitySidebar";
import ThinkLikeCompiler from "@/components/tutorials/ThinkLikeCompiler";

export default function Page() {
  return (
    <TutorialLayout
      title="Aggregate Functions, GROUP BY, and HAVING in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="90 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ImageBlock
        src="/images/rap/cds-view-entity/association/agreegation.webp"
        alt="Aggregate Functions"
        caption="Learn how SAP HANA performs aggregation using SUM, COUNT, AVG, MIN, MAX, GROUP BY and HAVING while understanding compiler behavior, currency semantics and architectural best practices."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Why Do Aggregate Functions Exist?">
        <p>
          In business applications we rarely want to display every individual
          transaction.
        </p>

        <p>Instead, business users usually ask questions such as:</p>

        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Total Sales Amount</li>

          <li>Total Number of Orders</li>

          <li>Average Delivery Time</li>

          <li>Highest Sales Order Value</li>

          <li>Lowest Product Price</li>
        </ul>

        <p className="mt-6">
          These questions cannot be answered by returning individual rows.
        </p>

        <p>
          They require summarizing data across multiple records. This process is
          known as <strong>Aggregation</strong>.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Understanding Aggregation">
        <p>Suppose the Sales Order Item table contains the following data.</p>

        <CodeBlock
          title="Sales Order Items"
          language="Text"
          code={`Sales Order    Item    Net Amount

1001           10      200

1001           20      300

1001           30      500

1002           10      150`}
        />

        <p>If the business asks:</p>

        <blockquote className="rounded-lg border-l-4 border-blue-600 bg-blue-50 px-6 py-4 italic">
          What is the total value of Sales Order 1001?
        </blockquote>

        <p>Returning individual rows is not sufficient.</p>

        <p>The database must calculate:</p>

        <CodeBlock
          title="Business Result"
          language="Text"
          code={`Sales Order    Total Amount

1001           1000

1002           150`}
        />
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Aggregate Functions Available in ABAP CDS">
        <table className="mt-6 w-full border-collapse rounded-xl overflow-hidden border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Function</th>

              <th className="border px-4 py-3 text-left">Purpose</th>

              <th className="border px-4 py-3 text-left">Example</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">SUM()</td>

              <td className="border px-4 py-3">Adds values</td>

              <td className="border px-4 py-3">Total Sales</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">COUNT()</td>

              <td className="border px-4 py-3">Counts records</td>

              <td className="border px-4 py-3">Number of Orders</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">AVG()</td>

              <td className="border px-4 py-3">Average</td>

              <td className="border px-4 py-3">Average Price</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">MIN()</td>

              <td className="border px-4 py-3">Lowest Value</td>

              <td className="border px-4 py-3">Lowest Discount</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">MAX()</td>

              <td className="border px-4 py-3">Highest Value</td>

              <td className="border px-4 py-3">Highest Revenue</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Your First Aggregate CDS View">
        <CodeBlock
          title="SUM Example"
          language="ABAP CDS"
          code={`define view entity ZI_TotalSales

  as select from I_SalesDocumentItem
{
    key SalesDocument,

    sum( NetAmount ) as TotalAmount
}
group by
    SalesDocument;`}
        />

        <p>
          This CDS View groups all items belonging to the same Sales Document
          and calculates the total Net Amount.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="How the Compiler Sees Aggregation"
        thought="Aggregation changes the shape of the result set. Multiple rows are combined into fewer rows based on the grouping columns."
        steps={[
          "Read all source records.",
          "Identify GROUP BY columns.",
          "Create groups.",
          "Apply aggregate functions (SUM, COUNT, AVG, MIN, MAX).",
          "Return one row per group.",
        ]}
        decision="Aggregation always returns fewer or equal rows than the source dataset."
        performanceTip="Aggregation is executed in SAP HANA and is highly optimized. Avoid transferring raw transactional data to ABAP when only summarized information is required."
      />

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        Aggregate functions are one of the biggest reasons CDS Views exist.
        <br />
        <br />
        Instead of fetching millions of transactional records into ABAP and
        calculating totals manually, let SAP HANA perform the aggregation
        directly in the database.
        <br />
        <br />
        This follows the Code Pushdown principle and significantly reduces
        network traffic and application server processing.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Understanding GROUP BY">
        <p>
          The moment you introduce an aggregate function such as
          <strong> SUM()</strong>, <strong>COUNT()</strong>,
          <strong>AVG()</strong>, <strong>MIN()</strong> or
          <strong>MAX()</strong>, the database must know how the records should
          be grouped before performing the calculation.
        </p>

        <p>
          This is exactly the purpose of the <strong>GROUP BY</strong> clause.
        </p>

        <blockquote className="rounded-lg border-l-4 border-blue-600 bg-blue-50 px-6 py-4 italic">
          GROUP BY tells SAP HANA how to partition the source rows before
          calculating aggregate values.
        </blockquote>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Without GROUP BY">
        <p>Consider the following data.</p>

        <CodeBlock
          title="Sales Order Items"
          language="Text"
          code={`Sales Order    Item    Net Amount

1001           10      200

1001           20      300

1001           30      500

1002           10      150

1002           20      350`}
        />

        <p>If we write:</p>

        <CodeBlock
          title="Incorrect Example"
          language="ABAP CDS"
          code={`define view entity ZI_TOTAL

  as select from I_SalesDocumentItem
{
    key SalesDocument,

    sum( NetAmount ) as TotalAmount
}`}
        />

        <p>The compiler immediately raises an error.</p>

        <blockquote className="rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4 italic">
          Every non-aggregated field appearing in the SELECT list must also
          appear in the GROUP BY clause.
        </blockquote>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Correct GROUP BY Example">
        <CodeBlock
          title="Aggregate CDS"
          language="ABAP CDS"
          code={`define view entity ZI_TOTAL

  as select from I_SalesDocumentItem
{
    key SalesDocument,

    sum( NetAmount ) as TotalAmount
}
group by
    SalesDocument;`}
        />

        <p>
          Now SAP HANA creates one group for every Sales Document and calculates
          the total amount within each group.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="How GROUP BY Creates Groups">
        <CodeBlock
          title="Before GROUP BY"
          language="Text"
          code={`1001    200

1001    300

1001    500

1002    150

1002    350`}
        />

        <p>GROUP BY first separates the rows.</p>

        <CodeBlock
          title="Grouping"
          language="Text"
          code={`Group 1001

200

300

500

──────────

Group 1002

150

350`}
        />

        <p>
          The aggregate function is then applied to each group individually.
        </p>

        <CodeBlock
          title="Final Result"
          language="Text"
          code={`Sales Order    Total

1001           1000

1002            500`}
        />
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="How GROUP BY Works"
        thought="Before any aggregate function executes, the compiler must organize the incoming rows into logical groups."
        steps={[
          "Read source rows.",
          "Identify GROUP BY columns.",
          "Create one group for each unique combination.",
          "Apply aggregate function to every group.",
          "Return one row per group.",
        ]}
        decision="Aggregation is impossible without knowing how rows should be grouped."
        performanceTip="Grouping is performed directly inside SAP HANA and is highly optimized for large datasets."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Multiple GROUP BY Columns">
        <p>A group is not limited to a single column.</p>

        <p>Multiple columns can be used to create more granular groups.</p>

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`define view entity ZI_TOTAL

  as select from I_SalesDocumentItem
{
    key SalesOrganization,

    key TransactionCurrency,

    sum( NetAmount ) as TotalAmount
}
group by

    SalesOrganization,

    TransactionCurrency;`}
        />

        <p>
          Here, SAP HANA creates one group for every unique combination of Sales
          Organization and Transaction Currency.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="GROUP BY Uses Every Selected Non-Aggregated Field">
        <p>
          This rule is one of the most important concepts in SQL and ABAP CDS.
        </p>

        <CodeBlock
          title="Incorrect"
          language="ABAP CDS"
          code={`{
    key SalesDocument,

    Material,

    sum( NetAmount ) as Total
}
group by

    SalesDocument;`}
        />

        <p>
          The field <strong>Material</strong> appears in the SELECT list but is
          missing from GROUP BY.
        </p>

        <p>
          SAP cannot determine which Material should be returned for each Sales
          Document because a Sales Order may contain many Materials.
        </p>

        <CodeBlock
          title="Correct"
          language="ABAP CDS"
          code={`group by

    SalesDocument,

    Material;`}
        />
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        A useful rule to remember is:
        <br />
        <br />
        <strong>
          Every field in the SELECT list must either
          <br />
          • appear inside an aggregate function, or
          <br />• appear in the GROUP BY clause.
        </strong>
        <br />
        <br />
        If neither condition is true, the compiler cannot determine which value
        should be returned.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Common GROUP BY Mistakes">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-red-50">
            <tr>
              <th className="border px-4 py-3 text-left">Mistake</th>

              <th className="border px-4 py-3 text-left">Why It Is Wrong</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Forgetting GROUP BY</td>

              <td className="border px-4 py-3">
                Aggregate functions require grouping.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Missing selected fields in GROUP BY
              </td>

              <td className="border px-4 py-3">
                The compiler cannot determine a unique value.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Adding unnecessary fields to GROUP BY
              </td>

              <td className="border px-4 py-3">
                Creates too many groups and changes business results.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="WHERE vs HAVING">
        <p>One of the most common questions in SQL and ABAP CDS is:</p>

        <blockquote className="rounded-lg border-l-4 border-blue-600 bg-blue-50 px-6 py-4 italic">
          Why do we need HAVING when we already have WHERE?
        </blockquote>

        <p>
          The answer lies in understanding <strong>when</strong> each clause is
          executed.
        </p>

        <p>
          The <strong>WHERE</strong> clause filters individual rows before any
          grouping or aggregation takes place, whereas the
          <strong> HAVING</strong> clause filters the aggregated groups after
          the aggregate functions have been calculated.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Execution Order">
        <CodeBlock
          title="SQL Execution Sequence"
          language="Text"
          code={`1. FROM

↓

2. WHERE

↓

3. GROUP BY

↓

4. Aggregate Functions

(SUM, COUNT, AVG...)

↓

5. HAVING

↓

6. SELECT`}
        />

        <p>
          Understanding this execution order explains almost every rule related
          to aggregation in ABAP CDS.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Compiler Execution Order"
        thought="The compiler processes data step by step. It cannot filter aggregated values before those values have been calculated."
        steps={[
          "Read source records.",
          "Apply WHERE filter.",
          "Create groups using GROUP BY.",
          "Calculate aggregate values.",
          "Apply HAVING filter.",
          "Return the final result.",
        ]}
        decision="WHERE works on rows. HAVING works on groups."
        performanceTip="Filtering early with WHERE reduces the number of rows that need to be grouped, improving performance."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Real Example">
        <p>Assume the source data contains the following Sales Order Items.</p>

        <CodeBlock
          title="Source Data"
          language="Text"
          code={`Sales Order    Date         Net Amount

1001           2026-01-02      20000

1001           2026-01-05      30000

1002           2026-01-03      10000

1002           2026-01-07      15000`}
        />

        <p>The business requirement is:</p>

        <blockquote className="rounded-lg border-l-4 border-green-600 bg-green-50 px-6 py-4 italic">
          Show only Sales Orders created in 2026 whose total value exceeds
          50,000.
        </blockquote>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Correct CDS Solution">
        <CodeBlock
          title="Aggregate with HAVING"
          language="ABAP CDS"
          code={`define view entity ZI_TOTAL

  as select from I_SalesDocumentItem
{
    key SalesDocument,

    sum( NetAmount ) as TotalAmount
}
where

    CreationDate >= '20260101'

group by

    SalesDocument

having

    sum( NetAmount ) > 50000;`}
        />
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="What Happens Internally?">
        <p>Let's walk through the execution exactly as SAP HANA performs it.</p>

        <CodeBlock
          title="Step 1"
          language="Text"
          code={`WHERE

↓

Keep only rows created on or after

2026-01-01`}
        />

        <CodeBlock
          title="Step 2"
          language="Text"
          code={`GROUP BY

↓

Create one group for each

Sales Document`}
        />

        <CodeBlock
          title="Step 3"
          language="Text"
          code={`SUM()

↓

Calculate TotalAmount

for every group`}
        />

        <CodeBlock
          title="Step 4"
          language="Text"
          code={`HAVING

↓

Remove groups whose

TotalAmount <= 50000`}
        />
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Why WHERE Cannot Replace HAVING">
        <p>Many beginners attempt to write:</p>

        <CodeBlock
          title="Incorrect Thinking"
          language="ABAP CDS"
          code={`where

sum( NetAmount ) > 50000`}
        />

        <p>
          This is impossible because the
          <strong> SUM()</strong> has not been calculated when the WHERE clause
          executes.
        </p>

        <p>
          At the WHERE stage, the compiler is still processing individual rows.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        A useful mental model is:
        <br />
        <br />
        <strong>
          WHERE filters transactions.
          <br />
          <br />
          HAVING filters business summaries.
        </strong>
        <br />
        <br />
        If your condition depends on an aggregate function such as SUM(),
        COUNT(), AVG(), MIN() or MAX(), it belongs in the HAVING clause.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="WHERE vs HAVING Comparison">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">WHERE</th>

              <th className="border px-4 py-3 text-left">HAVING</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Filters individual rows.</td>

              <td className="border px-4 py-3">Filters aggregated groups.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Executed before GROUP BY.</td>

              <td className="border px-4 py-3">Executed after aggregation.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Cannot use aggregate functions.
              </td>

              <td className="border px-4 py-3">
                Uses aggregate functions such as SUM(), COUNT(), AVG().
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Reduces input rows.</td>

              <td className="border px-4 py-3">Reduces output groups.</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Common Mistakes">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-red-50">
            <tr>
              <th className="border px-4 py-3 text-left">Mistake</th>

              <th className="border px-4 py-3 text-left">
                Why It Is Incorrect
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Using SUM() inside WHERE.</td>

              <td className="border px-4 py-3">
                Aggregate values don't exist yet.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Filtering after aggregation using WHERE.
              </td>

              <td className="border px-4 py-3">
                HAVING is designed for this purpose.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Using HAVING without understanding GROUP BY.
              </td>

              <td className="border px-4 py-3">
                HAVING always operates on grouped results.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="A Real Code Review">
        <p>Consider the following CDS View.</p>

        <CodeBlock
          title="Aggregate Example"
          language="ABAP CDS"
          code={`define view entity ZI_DEMO_AGGREGATE

  as select from I_SalesDocumentItem
{
    key SalesDocument,

    sum( get_numeric_value( NetAmount ) ) as TotalAmount
}
where

    CreationDate >= '20260101'

group by

    SalesDocument

having

    sum( NetAmount ) > 50000;`}
        />

        <p>At first glance, this CDS looks perfectly valid.</p>

        <p>
          However, from an ABAP Cloud and SAP Technical Architect perspective,
          there are several important design issues.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Issue 1 – Different Expressions in SELECT and HAVING">
        <p>In the SELECT list we calculate:</p>

        <CodeBlock
          language="ABAP CDS"
          code={`sum( get_numeric_value( NetAmount ) )`}
        />

        <p>But the HAVING clause evaluates:</p>

        <CodeBlock language="ABAP CDS" code={`sum( NetAmount ) > 50000`} />

        <p>These are not the same expressions.</p>

        <p>
          The SELECT removes currency semantics by calling
          <strong> GET_NUMERIC_VALUE()</strong>, whereas the HAVING clause still
          aggregates the original CURR field.
        </p>

        <p>
          Although some releases accept this syntax, it is inconsistent and
          should be avoided.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Issue 2 – Loss of Currency Semantics">
        <p>
          The original field <strong>NetAmount</strong> is a CURR field with an
          associated currency.
        </p>

        <CodeBlock
          title="Original Amount"
          language="ABAP CDS"
          code={`NetAmount`}
        />

        <p>After calling:</p>

        <CodeBlock
          title="Numeric Conversion"
          language="ABAP CDS"
          code={`get_numeric_value( NetAmount )`}
        />

        <p>the result becomes a plain numeric value.</p>

        <blockquote className="rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4 italic">
          The currency information is intentionally removed.
        </blockquote>

        <p>
          The value is now suitable for mathematical calculations, but it is no
          longer a business amount.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Issue 3 – What Does 50,000 Mean?">
        <p>Suppose your CDS returns:</p>

        <CodeBlock
          title="Result"
          language="Text"
          code={`Sales Order     Total

1001            55000

1002            70000`}
        />

        <p>
          What exactly does the value
          <strong> 55,000</strong> represent?
        </p>

        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>55,000 USD?</li>

          <li>55,000 EUR?</li>

          <li>55,000 INR?</li>
        </ul>

        <p className="mt-6">
          Once currency semantics are removed, the business meaning disappears.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Issue 4 – Mixed Currency Problem">
        <p>Imagine the following data.</p>

        <CodeBlock
          title="Sales Order Items"
          language="Text"
          code={`Sales Order    Currency    Amount

1003           USD         20000

1003           EUR         40000`}
        />

        <p>
          Aggregating these values using
          <strong> GET_NUMERIC_VALUE()</strong> produces:
        </p>

        <CodeBlock
          title="Incorrect Result"
          language="Text"
          code={`Sales Order

1003

Total

60000`}
        />

        <p>
          This total has no business meaning because two different currencies
          have been added together.
        </p>

        <ArchitectNote>
          In <strong>I_SalesDocumentItem</strong>, all items of a Sales Document
          normally share the same Transaction Currency, so this situation is
          unlikely.
          <br />
          <br />
          Nevertheless, from an architectural perspective you should always
          think about currency consistency whenever amounts are aggregated.
        </ArchitectNote>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Recommended Approach 1 – Preserve Currency">
        <p>
          If the aggregated value is intended to remain a business amount,
          preserve the currency semantics.
        </p>

        <CodeBlock
          title="Recommended"
          language="ABAP CDS"
          code={`define view entity ZI_DEMO_AGGREGATE

  as select from I_SalesDocumentItem
{
    key SalesDocument,

    TransactionCurrency,

    @Semantics.amount.currencyCode: 'TransactionCurrency'
    sum( NetAmount ) as TotalAmount
}
group by

    SalesDocument,

    TransactionCurrency

having

    sum( NetAmount ) > 50000;`}
        />

        <p>
          This approach keeps the amount and its currency together, preserving
          the business meaning.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Recommended Approach 2 – Mathematical Calculations">
        <p>
          If the requirement is purely mathematical, use
          <strong> GET_NUMERIC_VALUE()</strong>, but perform business filtering
          in a second CDS View.
        </p>

        <CodeBlock
          title="Interface View"
          language="ABAP CDS"
          code={`define view entity ZI_DEMO_AGGREGATE

  as select from I_SalesDocumentItem
{
    key SalesDocument,

    sum(
        get_numeric_value( NetAmount )
    ) as TotalAmount
}
group by

    SalesDocument;`}
        />

        <CodeBlock
          title="Consumption View"
          language="ABAP CDS"
          code={`define view entity ZC_DEMO_AGGREGATE

  as select from ZI_DEMO_AGGREGATE
{
    *
}
where

    TotalAmount > 50000;`}
        />

        <p>
          This layered approach is clean, reusable and aligns well with ABAP
          Cloud development principles.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Currency Semantics"
        thought="The compiler distinguishes between business amounts and mathematical values."
        steps={[
          "Read the source data type.",
          "Detect CURR semantics.",
          "Apply GET_NUMERIC_VALUE().",
          "Remove currency metadata.",
          "Return a numeric result without business semantics.",
        ]}
        decision="GET_NUMERIC_VALUE() is intended for calculations—not for representing business amounts."
        performanceTip="Whenever financial meaning matters, keep the currency field together with the aggregated amount."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Architect Recommendations">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-green-50">
            <tr>
              <th className="border px-4 py-3 text-left">Scenario</th>

              <th className="border px-4 py-3 text-left">Recommendation</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Financial reporting</td>

              <td className="border px-4 py-3">Preserve currency semantics.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Mathematical calculations</td>

              <td className="border px-4 py-3">Use GET_NUMERIC_VALUE().</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Filtering calculated totals</td>

              <td className="border px-4 py-3">
                Prefer a layered CDS approach.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Mixed currencies</td>

              <td className="border px-4 py-3">
                Never aggregate without considering business semantics.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      <ContentSection title="Where Should Sorting Be Performed?">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Consumer</th>

              <th className="border px-4 py-3 text-left">Recommendation</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Open SQL</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">RAP Query Provider</td>

              <td className="border px-4 py-3">
                ✅ Framework handles sorting.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">OData</td>

              <td className="border px-4 py-3">
                ✅ Use <strong>$orderby</strong>.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Fiori</td>

              <td className="border px-4 py-3">✅ User chooses sorting.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Interface CDS</td>

              <td className="border px-4 py-3">❌ Do not rely on ordering.</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Open SQL Example">
        <p>
          If business logic requires a specific order, perform it in Open SQL.
        </p>

        <CodeBlock
          title="Open SQL"
          language="ABAP"
          code={`SELECT *

FROM ZI_TOTAL

ORDER BY SalesDocument,
         TotalAmount DESC

INTO TABLE @DATA(lt_total).`}
        />

        <p>
          This is the correct place to define ordering because the ABAP program
          is the consumer of the CDS View.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="OData and RAP Example">
        <p>Suppose a Fiori List Report displays the aggregated Sales Orders.</p>

        <p>
          When the user clicks the
          <strong> Total Amount</strong> column header and selects
          <strong> Descending</strong>, the UI sends an OData request similar
          to:
        </p>

        <CodeBlock
          title="OData Request"
          language="HTTP"
          code={`GET

.../SalesOrders

?$orderby=TotalAmount desc`}
        />

        <p>
          The OData framework and RAP automatically translate this into an
          efficient SQL statement.
        </p>

        <p>The CDS View itself remains unchanged.</p>
      </ContentSection>

      <ContentSection title="Summary of the Complete Aggregation Pipeline">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-blue-50">
            <tr>
              <th className="border px-4 py-3 text-left">Clause</th>

              <th className="border px-4 py-3 text-left">Purpose</th>

              <th className="border px-4 py-3 text-left">Executed When?</th>

              <th className="border px-4 py-3 text-left">
                Aggregate Functions?
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">WHERE</td>

              <td className="border px-4 py-3">Filters individual rows.</td>

              <td className="border px-4 py-3">Before GROUP BY</td>

              <td className="border px-4 py-3">❌ No</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">GROUP BY</td>

              <td className="border px-4 py-3">Creates groups.</td>

              <td className="border px-4 py-3">After WHERE</td>

              <td className="border px-4 py-3">N/A</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">SUM, COUNT, AVG, MIN, MAX</td>

              <td className="border px-4 py-3">
                Calculates aggregated values.
              </td>

              <td className="border px-4 py-3">After GROUP BY</td>

              <td className="border px-4 py-3">N/A</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">HAVING</td>

              <td className="border px-4 py-3">Filters aggregated groups.</td>

              <td className="border px-4 py-3">After aggregation</td>

              <td className="border px-4 py-3">✅ Yes</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Performance Best Practices">
        <p>
          Aggregate functions are one of the biggest advantages of SAP HANA's
          Code Pushdown philosophy.
        </p>

        <p>
          Instead of transferring millions of records to the application server
          and calculating totals in ABAP, SAP HANA performs the aggregation
          directly in the database.
        </p>

        <p>
          However, good performance depends on how the CDS View is designed.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Architect Recommendations">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-green-50">
            <tr>
              <th className="border px-4 py-3 text-left">Recommendation</th>

              <th className="border px-4 py-3 text-left">Reason</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Filter rows using WHERE before aggregation.
              </td>

              <td className="border px-4 py-3">
                Reduces the number of rows that need to be grouped.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Group only by required fields.
              </td>

              <td className="border px-4 py-3">
                Prevents unnecessary groups and improves performance.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Preserve currency semantics whenever business amounts are
                reported.
              </td>

              <td className="border px-4 py-3">Prevents meaningless totals.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Use layered CDS Views for complex calculations.
              </td>

              <td className="border px-4 py-3">
                Improves readability and reuse.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Leave sorting to the consumer.
              </td>

              <td className="border px-4 py-3">
                Aligns with RAP and SAP's Virtual Data Model.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Common Mistakes">
        <CommonMistakes
          items={[
            "Using SUM() inside WHERE.",
            "Forgetting GROUP BY.",
            "Selecting non-aggregated fields that are not part of GROUP BY.",
            "Removing currency semantics without understanding the business impact.",
            "Adding values from different currencies together.",
            "Filtering aggregate results using WHERE instead of HAVING.",
            "Grouping by unnecessary columns.",
            "Performing aggregation in ABAP instead of SAP HANA.",
          ]}
        />
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="Why is GROUP BY required when using SUM()?"
          answer="GROUP BY defines how rows should be grouped before aggregate functions are calculated. Without it, SAP cannot determine which rows belong together."
        />

        <InterviewQuestion
          level="Experienced"
          question="What is the difference between WHERE and HAVING?"
          answer="WHERE filters individual rows before grouping, while HAVING filters aggregated groups after aggregate functions have been calculated."
        />

        <InterviewQuestion
          level="Architect"
          question="When should GET_NUMERIC_VALUE() be used?"
          answer="GET_NUMERIC_VALUE() should be used for mathematical calculations where currency semantics are intentionally removed. It should not be used when the result represents a business amount."
        />

        <InterviewQuestion
          level="Architect"
          question="Why is a layered CDS approach recommended for complex aggregations?"
          answer="Separating calculations from business filtering improves readability, reuse and maintainability while aligning with ABAP Cloud design principles."
        />
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Complete Aggregation Pipeline"
        thought="Aggregation is a sequential process. Every clause depends on the output of the previous one."
        steps={[
          "Read source rows.",
          "Apply WHERE filters.",
          "Create groups using GROUP BY.",
          "Calculate aggregate functions.",
          "Filter groups using HAVING.",
          "Return the aggregated result.",
        ]}
        decision="Every clause has a specific responsibility. Understanding the execution order explains almost every rule related to aggregation."
        performanceTip="Push filtering and aggregation to SAP HANA whenever possible. Transfer only the summarized business data to the application layer."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Aggregation Cheat Sheet">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-blue-50">
            <tr>
              <th className="border px-4 py-3 text-left">Clause / Function</th>

              <th className="border px-4 py-3 text-left">Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">WHERE</td>

              <td className="border px-4 py-3">Filter individual rows.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">GROUP BY</td>

              <td className="border px-4 py-3">Create logical groups.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                SUM(), COUNT(), AVG(), MIN(), MAX()
              </td>

              <td className="border px-4 py-3">Calculate aggregate values.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">HAVING</td>

              <td className="border px-4 py-3">Filter aggregated groups.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">GET_NUMERIC_VALUE()</td>

              <td className="border px-4 py-3">
                Remove currency semantics for mathematical calculations.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        <strong>Technical Architect Advice</strong>
        <br />
        <br />
        Aggregation is not simply about using <strong>SUM()</strong> or
        <strong> COUNT()</strong>.
        <br />
        <br />
        Good aggregation starts with understanding the business meaning of the
        data.
        <br />
        <br />
        Ask yourself:
        <br />
        <br />
        • What should be grouped?
        <br />
        • What should be filtered before aggregation?
        <br />
        • Should currency semantics be preserved?
        <br />
        • Does the result represent a business amount or only a mathematical
        value?
        <br />
        <br />
        Answering these questions correctly leads to robust and maintainable CDS
        Views that align with SAP's recommended architecture.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <KeyTakeaway>
        <p>
          Aggregate functions allow SAP HANA to summarize business data
          efficiently using Code Pushdown.
        </p>

        <p>
          Understanding the execution order of <strong>WHERE</strong>,
          <strong> GROUP BY</strong>, aggregate functions and
          <strong> HAVING</strong> is essential for building correct and
          performant CDS Views.
        </p>

        <p>
          Preserve currency semantics whenever the result represents a business
          amount, use <strong>GET_NUMERIC_VALUE()</strong> only for mathematical
          calculations, and treat sorting as the responsibility of the consumer.
        </p>

        <p>
          These principles will help you build scalable, reusable and
          cloud-ready CDS View Entities for SAP S/4HANA Public Cloud and RAP.
        </p>
      </KeyTakeaway>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Congratulations 🎉">
        <div className="rounded-xl border border-green-200 bg-green-50 p-8">
          <h3 className="text-2xl font-bold text-green-800">
            You've Completed the Aggregation Masterclass
          </h3>

          <p className="mt-6 text-slate-700">You now understand:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Aggregate Functions (SUM, COUNT, AVG, MIN, MAX)</li>

            <li>GROUP BY</li>

            <li>WHERE vs HAVING</li>

            <li>Execution Order</li>

            <li>Currency Semantics</li>

            <li>GET_NUMERIC_VALUE()</li>

            <li>Performance Best Practices</li>

            <li>Technical Architect Recommendations</li>
          </ul>

          <p className="mt-6 text-slate-700">
            These concepts form the foundation for building efficient,
            maintainable and semantically correct aggregation logic in ABAP CDS
            View Entities.
          </p>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <PrevNext
        prevTitle="Performance Best Practices"
        prevHref="/tutorials/rap/cds-view-entity/association-performance-best-practices"
        nextTitle="Session Variables, Parameters & UNION"
        nextHref="/tutorials/rap/cds-view-entity/session-variables-parameters-union"
      />
    </TutorialLayout>
  );
}
