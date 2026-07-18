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
      title="Association Lazy Loading and CDS Compiler Behavior in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="55 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      {/* Hero */}

      <ImageBlock
        src="/images/rap/cds-view-entity/association/association-master.webp"
        alt="Association Lazy Loading"
        caption="Understand why Associations don't immediately generate SQL JOINs and how the CDS compiler decides when related business objects should be accessed."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association Masterclass">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Lesson 4 of 15 – Association Lazy Loading & CDS Compiler Behavior
          </h3>

          <p className="mt-3 text-slate-700">
            So far, we've learned how to create Associations and navigate them
            using path expressions. One important question still remains.
          </p>

          <blockquote className="mt-5 rounded-lg border-l-4 border-blue-600 bg-white px-6 py-4 text-lg italic text-slate-700">
            If Associations eventually become SQL JOINs, why doesn't SAP simply
            generate the JOIN immediately?
          </blockquote>

          <p className="mt-5 text-slate-700">
            The answer lies in one of the smartest design decisions of ABAP CDS:
            <strong> Lazy Loading</strong>.
          </p>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Learning Objectives">
        <p>By the end of this lesson you will be able to:</p>

        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Explain Association Lazy Loading.</li>

          <li>Understand how the CDS compiler evaluates Associations.</li>

          <li>Predict when SQL JOINs will be generated.</li>

          <li>Understand why Associations improve reusability.</li>

          <li>Think like the CDS compiler instead of thinking in SQL.</li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Prerequisites">
        <ul className="list-disc space-y-3 pl-6">
          <li>Completion of Lessons 1–3.</li>

          <li>Understanding of Association syntax.</li>

          <li>Knowledge of Association Navigation.</li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Introduction">
        <p>
          Developers who come from traditional SQL backgrounds often expect an
          Association to behave exactly like a JOIN. They assume that as soon as
          an Association is defined, SAP immediately joins both business
          objects.
        </p>

        <p>That assumption is incorrect.</p>

        <p>
          An Association is not a SQL JOIN. It is simply metadata describing a
          reusable relationship between two business objects. At the time the
          CDS View is activated, no SQL JOIN is generated merely because an
          Association exists.
        </p>

        <p>
          Instead, SAP waits until a consumer actually requests data from the
          target business object. Only then does the CDS compiler decide whether
          a SQL JOIN is necessary.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        One of the biggest mindset changes when learning ABAP CDS is moving away
        from thinking in terms of SQL JOINs.
        <br />
        <br />
        Instead, think in terms of business relationships.
        <br />
        <br />
        Associations define relationships.
        <br />
        The CDS compiler decides when those relationships should become SQL.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="What is Lazy Loading?">
        <p>
          Lazy Loading is a software design principle in which work is postponed
          until it is actually required.
        </p>

        <p>
          Rather than retrieving every possible piece of related information,
          the system retrieves only the data requested by the current consumer.
        </p>

        <p>SAP applies exactly the same principle to Associations.</p>

        <CodeBlock
          title="Association Definition"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer

on $projection.SoldToParty = _Customer.Customer`}
        />

        <p>
          At this point, SAP knows that a relationship exists between Sales
          Orders and Customers.
        </p>

        <p>
          However, the compiler still does nothing because no customer fields
          have been requested.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Traditional SQL Thinking">
        <p>
          In traditional SQL, the developer explicitly decides which tables
          should be joined.
        </p>

        <CodeBlock
          title="Traditional SQL"
          language="SQL"
          code={`SELECT
    so.SalesDocument,
    c.CustomerName
FROM SalesOrder so

LEFT OUTER JOIN Customer c

ON so.SoldToParty = c.Customer`}
        />

        <p>
          As soon as this query executes, the database must perform the JOIN
          because the developer explicitly requested it.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association Thinking">
        <p>ABAP CDS follows a completely different philosophy.</p>

        <CodeBlock
          title="CDS Association"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer

on $projection.SoldToParty = _Customer.Customer

{

    key SalesDocument,

    SoldToParty

}`}
        />

        <p>
          Although the Association exists, no Customer fields are requested.
        </p>

        <p>Therefore, the compiler has no reason to generate a SQL JOIN.</p>

        <div className="rounded-xl border border-green-200 bg-green-50 p-6">
          <h3 className="mb-3 text-lg font-bold text-green-700">
            Compiler Decision
          </h3>

          <p className="leading-7 text-slate-700">
            The relationship is stored for future use, but the target business
            object is not accessed because no consumer requires it.
          </p>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="No Navigation Found"
        thought="An Association exists, but no path expression references any fields from the target business object."
        steps={[
          "Read the CDS View.",
          "Detect the Association definition.",
          "Validate the relationship condition.",
          "Search for path expressions.",
          "No navigation found.",
          "No related data required.",
        ]}
        decision="Skip SQL JOIN generation and execute the query using only the source CDS View."
        performanceTip="Associations themselves have almost no runtime cost. The compiler postpones SQL generation until a consumer actually navigates the relationship."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="What Changes When an Association is Navigated?">
        <p>Let's compare two nearly identical CDS Views.</p>

        <p>
          The only difference is that the second CDS View accesses a field from
          the Association.
        </p>

        <CodeBlock
          title="Example 1 - Association Defined Only"
          language="ABAP CDS"
          code={`{

    key SalesDocument,

    SoldToParty

}`}
        />

        <p>No fields from the Customer business object are requested.</p>

        <CodeBlock
          title="Example 2 - Association Navigated"
          language="ABAP CDS"
          code={`{

    key SalesDocument,

    SoldToParty,

    _Customer.CustomerName

}`}
        />

        <p>
          That single additional line completely changes how the CDS compiler
          processes the query.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="The CDS Compiler Decision Process">
        <p>
          Every time a CDS View is consumed, the CDS compiler evaluates whether
          related business objects are actually required.
        </p>

        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Compiler Check</th>

              <th className="border px-4 py-3 text-left">Decision</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Association exists?</td>

              <td className="border px-4 py-3">✅ Yes</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Path expression used?</td>

              <td className="border px-4 py-3">
                Only if a target field is requested.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Target data required?</td>

              <td className="border px-4 py-3">
                Compiler evaluates the requested elements.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">SQL JOIN generated?</td>

              <td className="border px-4 py-3">
                Only when navigation requires it.
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mt-6">
          This decision process happens automatically. As developers, we simply
          define relationships and navigate them when necessary.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Conceptual SQL Generated by the Compiler">
        <p>
          Although developers never write the SQL JOIN explicitly, the CDS
          compiler eventually transforms the Association into SQL when it is
          required.
        </p>

        <CodeBlock
          title="Conceptual SQL"
          language="SQL"
          code={`SELECT

    SalesDocument,

    SoldToParty,

    CustomerName

FROM I_SalesDocument

LEFT OUTER JOIN I_Customer

ON SoldToParty = Customer`}
        />

        <p>
          This SQL is shown only to help understand the compiler's behavior. The
          exact SQL generated by SAP HANA may differ depending on optimization
          performed by the database.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Performance Benefits of Lazy Loading">
        <p>
          Lazy Loading offers several important advantages over eagerly joining
          every related business object.
        </p>

        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Benefit</th>

              <th className="border px-4 py-3 text-left">Explanation</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Better Performance</td>

              <td className="border px-4 py-3">
                Unnecessary JOINs are avoided.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Reusable CDS Views</td>

              <td className="border px-4 py-3">
                Different consumers navigate only the Associations they need.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Cleaner Code</td>

              <td className="border px-4 py-3">
                Relationships are defined once instead of repeating JOIN logic.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Better Maintainability</td>

              <td className="border px-4 py-3">
                Business relationships remain centralized.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <RealWorldExample title="Manage Sales Orders Fiori Application">
        Consider a Fiori application that initially displays only Sales Order,
        Sold-To Party and Net Amount.
        <br />
        <br />
        Customer Name is not displayed on the overview screen, so the
        Association remains unused and no SQL JOIN is generated.
        <br />
        <br />
        Later, when the user opens the Object Page or requests additional
        customer information, the CDS View navigates
        <code>_Customer.CustomerName</code>.
        <br />
        <br />
        Only then does the CDS compiler generate the SQL JOIN required to
        retrieve customer master data.
      </RealWorldExample>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        <strong>Technical Architect Insight</strong>
        <br />
        <br />
        One of the biggest advantages of SAP's Virtual Data Model is that CDS
        Views are designed for multiple consumers.
        <br />
        <br />
        A reporting application, a RAP service, a Fiori application and an
        analytical query can all consume the same CDS View while navigating
        completely different Associations.
        <br />
        <br />
        The compiler generates SQL specifically for the current consumer rather
        than executing every possible JOIN upfront.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <BestPractice>
        Define Associations whenever they represent genuine business
        relationships.
        <br />
        <br />
        Navigate them only when related data is required.
        <br />
        <br />
        Let the CDS compiler decide when SQL JOINs should be generated instead
        of trying to optimize the SQL manually.
      </BestPractice>

      {/* ------------------------------------------------------------ */}

      <CommonMistakes
        items={[
          "Assuming Associations automatically improve performance.",
          "Believing SQL JOINs are never generated.",
          "Thinking Associations store data.",
          "Navigating Associations even when related fields are not required.",
        ]}
      />

      {/* ------------------------------------------------------------ */}

      <InterviewQuestion
        level="Beginner"
        question="What is Lazy Loading in ABAP CDS?"
        answer="Lazy Loading postpones SQL JOIN generation until data from the target Association is actually requested."
      />

      <InterviewQuestion
        level="Experienced"
        question="Why doesn't the CDS compiler immediately generate SQL JOINs for every Association?"
        answer="Because Associations represent reusable relationship metadata. The compiler generates JOINs only when a consumer navigates the Association through a path expression."
      />

      <InterviewQuestion
        level="Architect"
        question="How does the CDS compiler decide whether an Association should become a SQL JOIN?"
        answer="The compiler evaluates the requested elements of the CDS View. If no path expression accesses the target business object, the JOIN is skipped. If navigation occurs, the compiler generates the required SQL JOIN."
      />

      {/* ------------------------------------------------------------ */}

      <KeyTakeaway>
        <p>Associations are intentionally lazy.</p>

        <p>
          Defining an Association simply records a reusable business
          relationship. It does not retrieve any data.
        </p>

        <p>
          When a path expression accesses fields from the target business
          object, the CDS compiler transforms that relationship into the
          appropriate SQL JOIN.
        </p>

        <p>
          This compiler-driven approach is one of the key reasons SAP's Virtual
          Data Model remains reusable, maintainable and performant.
        </p>

        <p>
          In the next lesson, we'll build on this understanding by exploring
          <strong> Association Cardinality</strong>, one of the most important
          concepts for correctness, performance and generated SQL behavior.
        </p>
      </KeyTakeaway>

      {/* ------------------------------------------------------------ */}

      <PrevNext
        prevTitle="To-One vs To-Many"
        prevHref="/tutorials/rap/cds-view-entity/association-to-one-vs-to-many"
        nextTitle="Generated SQL"
        nextHref="/tutorials/rap/cds-view-entity/association-generated-sql"
      />
    </TutorialLayout>
  );
}
