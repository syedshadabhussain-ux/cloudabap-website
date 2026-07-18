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
      title="Association Cardinality in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="60 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      {/* Hero */}

      <ImageBlock
        src="/images/rap/cds-view-entity/association/association-master.webp"
        alt="Association Cardinality"
        caption="Learn how Association Cardinality influences business relationships, compiler behavior, generated SQL and application correctness in ABAP CDS."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association Masterclass">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Lesson 5 of 15 – Association Cardinality
          </h3>

          <p className="mt-3 text-slate-700">
            Until now, we've learned how to create Associations, navigate them,
            and understand when the CDS compiler generates SQL JOINs.
          </p>

          <p className="mt-3 text-slate-700">
            In this lesson, we'll answer one of the most misunderstood questions
            in ABAP CDS:
          </p>

          <blockquote className="mt-5 rounded-lg border-l-4 border-blue-600 bg-white px-6 py-4 text-lg italic text-slate-700">
            Why do we need Cardinality if the ON condition already defines the
            relationship?
          </blockquote>

          <p className="mt-5 text-slate-700">
            Understanding the answer separates developers who merely write CDS
            Views from architects who design reusable Virtual Data Models.
          </p>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Learning Objectives">
        <p>By the end of this lesson you will be able to:</p>

        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Understand why Cardinality exists.</li>

          <li>Explain the business meaning of Cardinality.</li>

          <li>Understand how Cardinality influences the CDS compiler.</li>

          <li>Choose the correct Cardinality for real business scenarios.</li>

          <li>Prepare for TO ONE and TO MANY behavior.</li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Prerequisites">
        <ul className="list-disc space-y-3 pl-6">
          <li>Lessons 1–4 of this Association Masterclass.</li>

          <li>Understanding of Association Navigation.</li>

          <li>Basic knowledge of SQL JOINs.</li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Introduction">
        <p>
          Whenever developers begin learning Associations, one of the first
          things they notice is the strange notation placed immediately after
          the
          <strong> association</strong> keyword.
        </p>

        <CodeBlock
          title="Association"
          language="ABAP CDS"
          code={`association [0..1]

association [1..1]

association [0..*]

association [1..*]`}
        />

        <p>
          Many developers simply memorize these values without understanding why
          they exist.
        </p>

        <p>
          Unfortunately, this leads to incorrect Associations, unexpected query
          results, poor performance, and confusing compiler behavior.
        </p>

        <p>
          Cardinality is much more than documentation. It tells both the
          developer and the CDS compiler what kind of relationship exists
          between two business objects.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        Never think of Cardinality as syntax.
        <br />
        <br />
        Think of it as a business rule.
        <br />
        <br />
        You're describing how many target business objects may exist for each
        source business object—not how SQL should behave.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Why Does Cardinality Exist?">
        <p>Imagine two business objects:</p>

        <CodeBlock
          title="Business Objects"
          language="Text"
          code={`Sales Order

↓

Customer`}
        />

        <p>Ask yourself one question:</p>

        <blockquote className="rounded-lg border-l-4 border-blue-500 bg-slate-50 px-6 py-4 italic text-slate-700">
          For one Sales Order, how many Customers can exist?
        </blockquote>

        <p>The answer is obvious.</p>

        <p>One Sales Order belongs to exactly one Sold-To Customer.</p>

        <p>
          Therefore, the business relationship itself already contains
          Cardinality.
        </p>

        <p>
          CDS simply requires us to describe that business relationship
          explicitly.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Cardinality Represents Business Relationships">
        <p>Cardinality does not describe SQL.</p>

        <p>Cardinality describes reality.</p>

        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">
                Business Relationship
              </th>

              <th className="border px-4 py-3 text-left">
                Typical Cardinality
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Sales Order → Customer</td>

              <td className="border px-4 py-3">0..1</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Sales Order → Company Code</td>

              <td className="border px-4 py-3">1..1</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Sales Order → Items</td>

              <td className="border px-4 py-3">0..*</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Customer → Sales Orders</td>

              <td className="border px-4 py-3">0..*</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-6">
          Notice that these values come from the business process—not from SQL.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Cardinality Is a Promise to the Compiler">
        <p>
          When you specify a Cardinality, you're making a promise to the CDS
          compiler.
        </p>

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer`}
        />

        <p>You're effectively saying:</p>

        <blockquote className="rounded-lg border-l-4 border-green-600 bg-green-50 px-6 py-4 text-slate-700">
          For every record of the current business object, there will never be
          more than one matching Customer.
        </blockquote>

        <p>
          The compiler can use this knowledge while validating navigation,
          optimizing generated SQL and enforcing Association semantics.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Reading Cardinality"
        thought="The developer declared that every source record has at most one matching target record."
        steps={[
          "Read the Association definition.",
          "Read the declared Cardinality.",
          "Treat Cardinality as metadata describing the relationship.",
          "Use this metadata during navigation validation.",
          "Use it later while generating SQL.",
          "Continue compiling the CDS View.",
        ]}
        decision="Cardinality becomes part of the Association metadata and influences compiler decisions in later stages."
        performanceTip="The compiler trusts the Cardinality you declare. Incorrect Cardinality may lead to incorrect assumptions and unexpected behavior."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Understanding the Four Cardinalities">
        <p>
          ABAP CDS supports four commonly used cardinalities. Each one describes
          a different type of business relationship between the source and
          target business objects.
        </p>

        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Cardinality</th>

              <th className="border px-4 py-3 text-left">Business Meaning</th>

              <th className="border px-4 py-3 text-left">Typical Example</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3 font-mono">[0..1]</td>

              <td className="border px-4 py-3">Zero or one matching record.</td>

              <td className="border px-4 py-3">Sales Order → Customer</td>
            </tr>

            <tr>
              <td className="border px-4 py-3 font-mono">[1..1]</td>

              <td className="border px-4 py-3">Exactly one matching record.</td>

              <td className="border px-4 py-3">Company Code → Currency</td>
            </tr>

            <tr>
              <td className="border px-4 py-3 font-mono">[0..*]</td>

              <td className="border px-4 py-3">
                Zero, one or many matching records.
              </td>

              <td className="border px-4 py-3">Sales Order → Items</td>
            </tr>

            <tr>
              <td className="border px-4 py-3 font-mono">[1..*]</td>

              <td className="border px-4 py-3">
                One or more matching records.
              </td>

              <td className="border px-4 py-3">
                Billing Document → Accounting Entries
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Choosing the Correct Cardinality">
        <p>
          Selecting the correct Cardinality should always begin with the
          business process—not with the database design.
        </p>

        <CodeBlock
          title="Example 1"
          language="Text"
          code={`Sales Order

↓

Customer`}
        />

        <p>Every Sales Order belongs to one Sold-To Customer.</p>

        <CodeBlock
          title="Recommended Cardinality"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer`}
        />

        <CodeBlock
          title="Example 2"
          language="Text"
          code={`Sales Order

↓

Sales Order Items`}
        />

        <p>A Sales Order may contain multiple items.</p>

        <CodeBlock
          title="Recommended Cardinality"
          language="ABAP CDS"
          code={`association [0..*] to I_SalesDocumentItem as _Item`}
        />
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Why TO MANY Associations Behave Differently">
        <p>
          Associations that point to multiple records introduce additional
          complexity because the compiler can no longer assume that navigation
          returns a single record.
        </p>

        <p>Consider the following Association:</p>

        <CodeBlock
          title="TO MANY Association"
          language="ABAP CDS"
          code={`association [0..*] to I_SalesDocumentItem as _Item`}
        />

        <p>
          One Sales Order may have one item, ten items or hundreds of items.
          Since multiple target records are possible, the compiler must treat
          this Association differently from a <code>[0..1]</code> Association.
        </p>

        <ArchitectNote>
          This is one of the reasons many TO MANY Associations have restrictions
          when used in path expressions, filters and WHERE clauses.
          <br />
          <br />
          We'll study those restrictions in dedicated lessons later in this
          series.
        </ArchitectNote>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Real SAP Examples">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Source CDS View</th>

              <th className="border px-4 py-3 text-left">Target CDS View</th>

              <th className="border px-4 py-3 text-left">
                Typical Cardinality
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">I_SalesDocument</td>

              <td className="border px-4 py-3">I_Customer</td>

              <td className="border px-4 py-3">[0..1]</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">I_SalesDocument</td>

              <td className="border px-4 py-3">I_SalesDocumentItem</td>

              <td className="border px-4 py-3">[0..*]</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">I_BillingDocument</td>

              <td className="border px-4 py-3">I_Customer</td>

              <td className="border px-4 py-3">[0..1]</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <RealWorldExample title="Sales Order and Items">
        Think about a typical sales order.
        <br />
        <br />
        Sales Order <strong>5000001234</strong> may contain:
        <br />
        <br />
        • Item 10
        <br />
        • Item 20
        <br />
        • Item 30
        <br />
        • Item 40
        <br />
        <br />
        Since multiple items belong to the same Sales Order, the relationship
        must be modeled as <strong>[0..*]</strong>.
        <br />
        <br />
        On the other hand, the same Sales Order usually has only one Sold-To
        Customer, making <strong>[0..1]</strong> the correct choice for the
        Customer Association.
      </RealWorldExample>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        <strong>Technical Architect Insight</strong>
        <br />
        <br />
        Incorrect Cardinality is one of the most common design mistakes in
        custom CDS Views.
        <br />
        <br />
        Never choose Cardinality simply because it "works."
        <br />
        <br />
        Choose the Cardinality that accurately represents the business
        relationship. The CDS compiler and future consumers rely on this
        information when validating navigation and optimizing generated SQL.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <BestPractice>
        Determine Cardinality by asking one simple business question:
        <br />
        <br />
        <strong>
          "For one source business object, how many target business objects can
          exist?"
        </strong>
        <br />
        <br />
        Let the business answer determine the Cardinality—not the technical
        implementation.
      </BestPractice>

      {/* ------------------------------------------------------------ */}

      <CommonMistakes
        items={[
          "Memorizing Cardinality values without understanding the business relationship.",
          "Using [0..*] for every Association.",
          "Choosing Cardinality based on database tables instead of business semantics.",
          "Assuming Cardinality affects only documentation.",
        ]}
      />

      {/* ------------------------------------------------------------ */}

      <InterviewQuestion
        level="Beginner"
        question="What does Cardinality represent in an Association?"
        answer="Cardinality describes the business relationship between the source and target business objects by specifying how many target records may exist for each source record."
      />

      <InterviewQuestion
        level="Experienced"
        question="Does Cardinality describe SQL behavior or business relationships?"
        answer="Cardinality primarily describes the business relationship. The CDS compiler then uses this metadata when validating Associations and generating SQL."
      />

      <InterviewQuestion
        level="Architect"
        question="How do you determine the correct Cardinality when designing a new Association?"
        answer="Start with the business process. Ask how many target business objects can exist for one source business object. The answer determines the Cardinality, not the database implementation."
      />

      {/* ------------------------------------------------------------ */}

      <KeyTakeaway>
        <p>
          Cardinality is not just syntax—it is a declaration of the underlying
          business relationship.
        </p>

        <p>
          The CDS compiler trusts the Cardinality you define and uses it during
          validation, navigation and SQL generation. Choosing the wrong
          Cardinality can lead to incorrect assumptions and unexpected runtime
          behavior.
        </p>

        <p>
          In the next lesson, we'll explore how Cardinality directly influences
          generated SQL by comparing <strong>TO ONE</strong> and
          <strong> TO MANY</strong> Associations.
        </p>
      </KeyTakeaway>

      {/* ------------------------------------------------------------ */}

      <PrevNext
        prevTitle="Navigation"
        prevHref="/tutorials/rap/cds-view-entity/association-navigation"
        nextTitle="To-One vs To-Many"
        nextHref="/tutorials/rap/cds-view-entity/association-to-one-vs-to-many"
      />
    </TutorialLayout>
  );
}
