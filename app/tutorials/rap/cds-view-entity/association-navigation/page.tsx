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
      title="Association Navigation and Path Expressions in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="50 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ImageBlock
        src="/images/rap/cds-view-entity/association/association-master.webp"
        alt="Association Navigation in ABAP CDS"
        caption="Learn how to navigate Associations using path expressions and understand how the CDS compiler generates SQL JOINs only when related fields are accessed."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association Masterclass">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Lesson 3 of 15 – Association Navigation &amp; Path Expressions
          </h3>

          <p className="mt-3 text-slate-700">
            In the previous lesson, we created our first Association between two
            business objects. However, defining an Association alone does not
            retrieve any data from the target CDS View.
          </p>

          <p className="mt-3 text-slate-700">
            In this lesson, you'll learn how to navigate an Association using
            path expressions and understand why this simple syntax is one of the
            most powerful features of ABAP CDS.
          </p>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Learning Objectives">
        <p>By the end of this lesson you will be able to:</p>

        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Understand Association navigation.</li>

          <li>Use path expressions to retrieve related data.</li>

          <li>Navigate multiple fields from the same Association.</li>

          <li>Understand when the CDS compiler generates SQL JOINs.</li>

          <li>Prepare for lazy loading concepts in the next lesson.</li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Prerequisites">
        <ul className="list-disc space-y-3 pl-6">
          <li>Completion of Lesson 1 and Lesson 2.</li>

          <li>Understanding of basic Association syntax.</li>

          <li>Basic knowledge of CDS View Entities.</li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Introduction">
        <p>
          Many developers believe that creating an Association automatically
          retrieves data from the target business object. This is one of the
          biggest misconceptions when learning ABAP CDS.
        </p>

        <p>
          Remember what we learned in Lesson 2: an Association simply defines a
          reusable relationship between two CDS Views. Until that relationship
          is actually used, the target CDS View remains untouched.
        </p>

        <p>
          So how do we tell SAP that we want data from the target business
          object?
        </p>

        <p>
          The answer is <strong>Association Navigation</strong>, also known as a
          <strong> Path Expression</strong>.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        Creating an Association does not retrieve data.
        <br />
        <br />
        Navigating an Association retrieves data.
        <br />
        <br />
        This distinction is fundamental to understanding SAP's Virtual Data
        Model and is one of the most frequently asked interview questions on
        ABAP CDS.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="What is Association Navigation?">
        <p>
          Association Navigation means accessing fields from the target CDS View
          through the Association that you previously defined.
        </p>

        <p>
          Instead of writing another SQL JOIN, you simply reference the
          Association alias followed by the required field.
        </p>

        <CodeBlock
          title="Association Navigation"
          language="ABAP CDS"
          code={`_Customer.CustomerName`}
        />

        <p>Read this expression as:</p>

        <blockquote className="rounded-lg border-l-4 border-blue-500 bg-slate-50 px-6 py-4 italic text-slate-700">
          Navigate to the <strong>Customer</strong> business object and retrieve
          its <strong>CustomerName</strong>.
        </blockquote>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Understanding Path Expressions">
        <p>
          A path expression consists of two parts separated by a period (.).
        </p>

        <CodeBlock
          title="Path Expression"
          language="ABAP CDS"
          code={`_Customer.CustomerName`}
        />

        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Part</th>
              <th className="border px-4 py-3 text-left">Meaning</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3 font-mono">_Customer</td>

              <td className="border px-4 py-3">
                Association alias defined in the CDS View.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3 font-mono">CustomerName</td>

              <td className="border px-4 py-3">
                Field to retrieve from the target CDS View.
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mt-6">
          Think of the period (<strong>.</strong>) as navigating from one
          business object to another.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Your First Association Navigation">
        <p>In Lesson 2, we created the following Association:</p>

        <CodeBlock
          title="Existing Association"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer

on $projection.SoldToParty = _Customer.Customer`}
        />

        <p>To retrieve the customer's name, simply navigate the Association.</p>

        <CodeBlock
          title="Navigating the Association"
          language="ABAP CDS"
          code={`define view entity ZI_SalesOrder

  as select from I_SalesDocument

  association [0..1] to I_Customer as _Customer

    on $projection.SoldToParty = _Customer.Customer

{

    key SalesDocument,

    SoldToParty,

    _Customer.CustomerName

}`}
        />

        <p>
          Notice that no SQL JOIN has been written anywhere in the CDS View.
          Instead, we simply access the field through the Association alias.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Code Walkthrough">
        <p>Let's understand what changed compared to the previous lesson.</p>

        <CodeBlock
          title="New Line Added"
          language="ABAP CDS"
          code={`_Customer.CustomerName`}
        />

        <p>
          This single line instructs the CDS compiler to navigate the
          Association and retrieve the <strong>CustomerName</strong> field from
          the target CDS View.
        </p>

        <p>
          Although the syntax looks very simple, this is the exact moment where
          the compiler decides that the target business object is actually
          required.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Navigating Multiple Fields">
        <p>
          Once an Association has been defined, you are not limited to
          retrieving a single field. You can navigate the same Association
          multiple times to access any fields exposed by the target CDS View.
        </p>

        <CodeBlock
          title="Retrieving Multiple Fields"
          language="ABAP CDS"
          code={`{

    key SalesDocument,

    SoldToParty,

    _Customer.CustomerName,

    _Customer.Country,

    _Customer.CityName

}`}
        />

        <p>
          Although three fields are retrieved from the Customer business object,
          you still write only one Association. The CDS compiler determines the
          SQL required to retrieve all requested fields.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association Defined vs Association Navigated">
        <p>
          The following examples demonstrate the difference between defining an
          Association and actually using it.
        </p>

        <CodeBlock
          title="Association Defined (No Navigation)"
          language="ABAP CDS"
          code={`{

    key SalesDocument,

    SoldToParty

}`}
        />

        <p>The Association exists, but no fields are accessed.</p>

        <CodeBlock
          title="Association Navigated"
          language="ABAP CDS"
          code={`{

    key SalesDocument,

    SoldToParty,

    _Customer.CustomerName

}`}
        />

        <p>
          By requesting <code>_Customer.CustomerName</code>, the Association is
          navigated and customer information becomes part of the query result.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Can Associations Be Navigated Multiple Times?">
        <p>
          Yes. A single Association can be reused as many times as required
          within the same CDS View.
        </p>

        <CodeBlock
          title="Multiple Navigation"
          language="ABAP CDS"
          code={`_Customer.CustomerName,

_Customer.Country,

_Customer.CityName,

_Customer.PostalCode`}
        />

        <p>
          This is one of the major advantages of Associations over repeatedly
          writing SQL JOIN logic. The relationship is defined once and reused
          whenever required.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Association Navigation"
        thought="The CDS compiler has detected that a field from the target Association has been requested."
        steps={[
          "Read the Association definition.",
          "Validate the ON condition.",
          "Detect the path expression (_Customer.CustomerName).",
          "Determine that data from I_Customer is required.",
          "Generate the required SQL JOIN.",
          "Return the requested CustomerName field.",
        ]}
        decision="Generate the SQL JOIN because the Association has been navigated through a path expression."
        performanceTip="Associations are lazy. SQL is generated only when the navigation requires data from the target business object."
      />

      {/* ------------------------------------------------------------ */}

      <RealWorldExample title="Sales Order Overview Application">
        Imagine a Fiori application that initially displays only Sales Order
        Number, Sold-To Party and Net Amount.
        <br />
        <br />
        At this stage, customer master data is not required, so the Association
        remains unused.
        <br />
        <br />
        Later, the business requests that the Customer Name should also appear
        in the report. Instead of writing a new SQL JOIN, the developer simply
        adds:
        <br />
        <br />
        <CodeBlock language="ABAP CDS" code={`_Customer.CustomerName`} />
        The existing Association is reused and the CDS compiler automatically
        generates the necessary SQL JOIN.
      </RealWorldExample>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        An Association is reusable metadata describing a business relationship.
        <br />
        <br />
        A path expression is the instruction that tells the CDS compiler to use
        that relationship and retrieve data from the target business object.
        <br />
        <br />
        Understanding the difference between these two concepts is essential for
        mastering SAP's Virtual Data Model.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <BestPractice>
        Define Associations for reusable business relationships, but navigate
        them only when the business scenario actually requires data from the
        target object.
        <br />
        <br />
        This improves readability and allows SAP HANA to execute only the SQL
        that is genuinely needed.
      </BestPractice>

      {/* ------------------------------------------------------------ */}

      <CommonMistakes
        items={[
          "Assuming that defining an Association automatically retrieves data.",
          "Expecting customer fields to appear without using a path expression.",
          "Creating duplicate Associations instead of reusing an existing one.",
          "Confusing Association aliases with normal CDS elements.",
        ]}
      />

      {/* ------------------------------------------------------------ */}

      <InterviewQuestion
        level="Beginner"
        question="What is a path expression?"
        answer="A path expression navigates an Association and retrieves fields from the target CDS View using the syntax _Association.Field."
      />

      <InterviewQuestion
        level="Experienced"
        question="When does the CDS compiler generate a SQL JOIN for an Association?"
        answer="A SQL JOIN is generated only when a path expression accesses fields from the target Association."
      />

      <InterviewQuestion
        level="Architect"
        question="What is the difference between defining an Association and navigating an Association?"
        answer="Defining an Association creates reusable relationship metadata between business objects. Navigating the Association through a path expression instructs the CDS compiler to generate the SQL JOIN and retrieve data from the target CDS View."
      />

      {/* ------------------------------------------------------------ */}

      <KeyTakeaway>
        <p>
          Associations define relationships between business objects, while path
          expressions use those relationships to retrieve data.
        </p>

        <p>
          Simply defining an Association does not generate a SQL JOIN. The JOIN
          is generated only when the CDS compiler detects that fields from the
          target business object are actually required.
        </p>

        <p>
          In the next lesson, we'll dive deeper into this compiler behavior and
          explore one of the most powerful concepts in ABAP CDS—
          <strong> Lazy Loading</strong>.
        </p>
      </KeyTakeaway>

      {/* ------------------------------------------------------------ */}

      <PrevNext
        prevTitle="First Association"
        prevHref="/tutorials/rap/cds-view-entity/association-first-association"
        nextTitle="Cardinality"
        nextHref="/tutorials/rap/cds-view-entity/association-cardinality"
      />
    </TutorialLayout>
  );
}
