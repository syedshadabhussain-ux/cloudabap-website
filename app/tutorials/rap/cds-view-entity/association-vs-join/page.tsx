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
      title="ON Condition vs WHERE Clause in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="75 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      {/* Hero */}

      <ImageBlock
        src="/images/rap/cds-view-entity/association/association-master.webp"
        alt="ON Condition vs WHERE Clause"
        caption="Learn the architectural difference between ON conditions and WHERE clauses, understand filter pushdown and discover why choosing the correct location for a condition changes the generated SQL."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association Masterclass">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Lesson 8 of 15 – ON Condition vs WHERE Clause
          </h3>

          <p className="mt-3 text-slate-700">
            This lesson answers one of the most common interview questions and
            one of the biggest causes of performance issues in custom CDS Views.
          </p>

          <blockquote className="mt-5 rounded-lg border-l-4 border-blue-600 bg-white px-6 py-4 text-lg italic text-slate-700">
            Should a condition be placed inside the ON clause or in the WHERE
            clause?
          </blockquote>

          <p className="mt-5 text-slate-700">
            Although both filter data, they are executed at different stages of
            query processing and therefore can produce different SQL,
            performance characteristics and even different business results.
          </p>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Learning Objectives">
        <ul className="list-disc space-y-3 pl-6">
          <li>Understand the purpose of the ON condition.</li>

          <li>Understand the purpose of the WHERE clause.</li>

          <li>Learn how the CDS compiler treats both differently.</li>

          <li>Understand filter pushdown.</li>

          <li>Prepare for TO MANY restrictions in Part 2.</li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Introduction">
        <p>
          Developers often think that these two statements are interchangeable.
        </p>

        <CodeBlock
          title="ON"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer

on $projection.SoldToParty = _Customer.Customer`}
        />

        <CodeBlock
          title="WHERE"
          language="ABAP CDS"
          code={`where SalesOrganization = '1010'`}
        />

        <p>They are not solving the same problem.</p>

        <p>
          The ON condition defines the relationship between two business
          objects.
        </p>

        <p>
          The WHERE clause filters the final result set after those business
          relationships have been evaluated.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        Think of the ON condition as answering one question:
        <br />
        <br />
        <strong>"How are these two business objects related?"</strong>
        <br />
        <br />
        Think of the WHERE clause as answering another question:
        <br />
        <br />
        <strong>"Which business records should finally be returned?"</strong>
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Understanding the ON Condition">
        <p>Every Association requires an ON condition.</p>

        <p>
          It defines the relationship between the source and target business
          objects.
        </p>

        <CodeBlock
          title="Association"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer

on

$projection.SoldToParty

=

_Customer.Customer`}
        />

        <p>The compiler stores this relationship as metadata.</p>

        <p>
          Whenever a consumer navigates the Association, this condition becomes
          part of the generated JOIN.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Understanding the WHERE Clause">
        <p>The WHERE clause is fundamentally different.</p>

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`where SalesOrganization = '1010'`}
        />

        <p>
          This condition has nothing to do with the relationship between
          business objects.
        </p>

        <p>
          It simply filters the records that should appear in the final result.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="A Real Business Example">
        <p>Consider a Sales Order and Customer relationship.</p>

        <CodeBlock
          title="Association"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer

on

$projection.SoldToParty

=

_Customer.Customer`}
        />

        <p>This relationship should never change.</p>

        <p>
          Whether you display one Sales Order or one million Sales Orders, every
          Sales Order is still related to its Sold-To Customer using the same
          business rule.
        </p>

        <p>Now suppose the business asks:</p>

        <blockquote className="rounded-lg border-l-4 border-green-600 bg-green-50 px-6 py-4 text-slate-700">
          Show only Sales Orders created today.
        </blockquote>

        <p>That is not a relationship.</p>

        <p>That is simply a filter.</p>

        <CodeBlock
          title="Correct"
          language="ABAP CDS"
          code={`where CreationDate = $session.system_date`}
        />
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Compiler View of ON vs WHERE">
        <p>The CDS compiler processes these clauses at different stages.</p>

        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">ON Condition</th>

              <th className="border px-4 py-3 text-left">WHERE Clause</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Defines business relationship.
              </td>

              <td className="border px-4 py-3">Filters final result.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Becomes JOIN condition.</td>

              <td className="border px-4 py-3">Becomes SQL WHERE.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Part of Association metadata.
              </td>

              <td className="border px-4 py-3">Part of query execution.</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Relationship vs Filtering"
        thought="The compiler first builds relationships between business objects and only afterwards applies result filtering."
        steps={[
          "Read the root CDS View.",
          "Read every Association.",
          "Store every ON condition.",
          "Generate JOINs.",
          "Apply WHERE conditions.",
          "Return the filtered result.",
        ]}
        decision="ON conditions participate in relationship generation. WHERE clauses filter the generated result set."
        performanceTip="Moving a condition from ON to WHERE can completely change both the generated SQL and the returned business data."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="The Same Condition in ON and WHERE Produces Different Results">
        <p>
          At first glance, the following two CDS Views appear to do the same
          thing.
        </p>

        <p>They don't.</p>

        <p>
          The location of the condition completely changes the semantics of the
          query.
        </p>

        <CodeBlock
          title="Condition inside ON"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer

on  $projection.SoldToParty = _Customer.Customer
and _Customer.Country = 'IN'`}
        />

        <p>Here the country condition becomes part of the JOIN itself.</p>

        <p>
          Every Sales Order is still returned, but Customer data is populated
          only when the matching Customer belongs to India.
        </p>

        <CodeBlock
          title="Condition inside WHERE"
          language="ABAP CDS"
          code={`where _Customer.Country = 'IN'`}
        />

        <p>
          Here the relationship is evaluated first and then the entire result
          set is filtered.
        </p>

        <p>Sales Orders without an Indian Customer disappear completely.</p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="How the Generated SQL Changes">
        <p>Consider a LEFT OUTER JOIN generated by the compiler.</p>

        <CodeBlock
          title="Generated SQL (Condition in ON)"
          language="SQL"
          code={`LEFT OUTER JOIN I_CUSTOMER

ON

SALESORDER.SOLDTOPARTY = CUSTOMER.CUSTOMER

AND CUSTOMER.COUNTRY = 'IN'`}
        />

        <p>
          Every Sales Order still participates in the result because the filter
          belongs to the JOIN condition.
        </p>

        <CodeBlock
          title="Generated SQL (Condition in WHERE)"
          language="SQL"
          code={`LEFT OUTER JOIN I_CUSTOMER

ON

SALESORDER.SOLDTOPARTY = CUSTOMER.CUSTOMER

WHERE CUSTOMER.COUNTRY = 'IN'`}
        />

        <p>
          This WHERE clause removes every row where the joined Customer is NULL.
        </p>

        <p>
          In practice, the LEFT OUTER JOIN now behaves almost like an INNER
          JOIN.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Why TO MANY Associations Cannot Be Used in WHERE">
        <p>This is one of the most misunderstood CDS restrictions.</p>

        <CodeBlock
          title="TO MANY Association"
          language="ABAP CDS"
          code={`association [0..*] to I_SalesDocumentItem as _Item

on $projection.SalesDocument = _Item.SalesDocument`}
        />

        <p>Developers often try to write:</p>

        <CodeBlock
          title="Incorrect"
          language="ABAP CDS"
          code={`where _Item.Material = 'TG11'`}
        />

        <p>
          The CDS compiler rejects this because the Association may return
          multiple matching records.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Understanding the Ambiguity">
        <p>Imagine the following Sales Order.</p>

        <CodeBlock
          title="Sales Order"
          language="Text"
          code={`Sales Order 500000001

↓

Item 10 → Material ABC

↓

Item 20 → Material XYZ

↓

Item 30 → Material DEF`}
        />

        <p>Now ask yourself one simple question.</p>

        <blockquote className="rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4 italic text-slate-700">
          What exactly does this condition mean?
        </blockquote>

        <CodeBlock
          title="WHERE"
          language="ABAP CDS"
          code={`where _Item.Material = 'ABC'`}
        />

        <p>Should the Sales Order be returned because one Item matches?</p>

        <p>Should only Item 10 remain?</p>

        <p>Should Items 20 and 30 disappear?</p>

        <p>The compiler cannot answer these questions deterministically.</p>

        <p>Rather than guessing, it rejects the statement completely.</p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="TO MANY in WHERE"
        thought="The Association may return multiple target records. A scalar WHERE condition requires exactly one value."
        steps={[
          "Read the Association.",
          "Determine Cardinality (TO MANY).",
          "Evaluate the WHERE clause.",
          "Detect multiple possible target records.",
          "Unable to determine a single comparison value.",
          "Reject the statement.",
        ]}
        decision="Compilation error because the semantics are ambiguous."
        performanceTip="The restriction exists to protect correctness, not because of a technical limitation."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="What Should You Do Instead?">
        <p>If you need to filter Item data, there are better design options.</p>

        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Requirement</th>

              <th className="border px-4 py-3 text-left">
                Recommended Solution
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Filter Sales Order Items</td>

              <td className="border px-4 py-3">
                Build the CDS on I_SalesDocumentItem instead of the header.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Filter Customer</td>

              <td className="border px-4 py-3">
                TO ONE Associations can safely be filtered.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Complex filtering</td>

              <td className="border px-4 py-3">
                Consider explicit JOINs or redesign the data model.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <RealWorldExample title="Sales Order Search Application">
        A business user wants to search Sales Orders containing Material
        <strong> TG11</strong>.
        <br />
        <br />
        A common mistake is trying to filter the Header CDS View using:
        <br />
        <br />
        <CodeBlock language="ABAP CDS" code={`where _Item.Material = 'TG11'`} />
        Instead, SAP typically starts from the Item CDS View, applies the
        Material filter there and then navigates back to the Header if required.
        <br />
        <br />
        This produces deterministic results and scales much better for large
        datasets.
      </RealWorldExample>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        <strong>Technical Architect Insight</strong>
        <br />
        <br />
        Ask yourself one question before writing every condition.
        <br />
        <br />
        <strong>
          Am I defining a relationship,
          <br />
          or filtering business data?
        </strong>
        <br />
        <br />
        Relationship rules belong in the ON condition.
        <br />
        <br />
        Business filters belong in the WHERE clause.
        <br />
        <br />
        Mixing these responsibilities is one of the most common causes of
        incorrect CDS models.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <BestPractice>
        Use the ON condition only to describe how business objects are related.
        <br />
        <br />
        Use the WHERE clause only to restrict the final business result.
        <br />
        <br />
        If filtering requires navigating a TO MANY Association, reconsider the
        root data source or redesign the CDS View instead of trying to force the
        condition into WHERE.
      </BestPractice>

      {/* ------------------------------------------------------------ */}

      <CommonMistakes
        items={[
          "Using ON conditions to implement business filters.",
          "Using WHERE conditions to define relationships.",
          "Trying to filter TO MANY Associations directly in WHERE.",
          "Assuming ON and WHERE are interchangeable.",
        ]}
      />

      {/* ------------------------------------------------------------ */}

      <InterviewQuestion
        level="Experienced"
        question="Why can the same condition produce different results when placed in ON and WHERE?"
        answer="An ON condition becomes part of the JOIN relationship, whereas a WHERE clause filters rows after the JOIN has been evaluated. This can change both the generated SQL and the final result set."
      />

      <InterviewQuestion
        level="Architect"
        question="Why are TO MANY Associations restricted in WHERE clauses?"
        answer="Because a TO MANY Association may return multiple target records. The compiler cannot derive a single deterministic value for a scalar comparison, so it rejects the statement to prevent ambiguous query semantics."
      />

      {/* ------------------------------------------------------------ */}

      <KeyTakeaway>
        <p>The ON condition and WHERE clause solve different problems.</p>

        <p>
          The ON condition defines relationships between business objects,
          whereas the WHERE clause filters the final business result.
        </p>

        <p>
          Understanding this distinction explains why conditions placed in
          different locations can produce different SQL, different performance
          characteristics and even different business results.
        </p>

        <p>
          In the next lesson, we'll explore
          <strong> Multiple and Nested Associations</strong> and see how the CDS
          compiler navigates complex business relationship graphs.
        </p>
      </KeyTakeaway>

      {/* ------------------------------------------------------------ */}

      <PrevNext
        prevTitle="Generated SQL"
        prevHref="/tutorials/rap/cds-view-entity/association-generated-sql"
        nextTitle="Advanced Patterns"
        nextHref="/tutorials/rap/cds-view-entity/association-advanced-patterns"
      />
    </TutorialLayout>
  );
}
