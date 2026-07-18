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
      title="TO ONE vs TO MANY Associations in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="60 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      {/* Hero */}

      <ImageBlock
        src="/images/rap/cds-view-entity/association/association-master.webp"
        alt="TO ONE vs TO MANY Associations"
        caption="Understand why TO ONE and TO MANY Associations behave differently, how they affect generated SQL, and why Cardinality is much more than documentation."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association Masterclass">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Lesson 6 of 15 – TO ONE vs TO MANY Associations
          </h3>

          <p className="mt-3 text-slate-700">
            In the previous lesson we learned that Cardinality represents the
            business relationship between two business objects.
          </p>

          <p className="mt-3 text-slate-700">
            This naturally leads to another important question.
          </p>

          <blockquote className="mt-5 rounded-lg border-l-4 border-blue-600 bg-white px-6 py-4 text-lg italic text-slate-700">
            If Cardinality is only metadata, why does SAP care whether an
            Association is TO ONE or TO MANY?
          </blockquote>

          <p className="mt-5 text-slate-700">
            The answer lies in how the CDS compiler interprets your Association
            and the assumptions it can safely make while generating SQL.
          </p>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Learning Objectives">
        <p>By the end of this lesson you will be able to:</p>

        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            Understand the difference between TO ONE and TO MANY Associations.
          </li>

          <li>Know why the CDS compiler treats them differently.</li>

          <li>
            Understand why TO MANY Associations have additional restrictions.
          </li>

          <li>Recognize typical business scenarios for each Cardinality.</li>

          <li>Prepare for generated SQL behavior in the next lesson.</li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Prerequisites">
        <ul className="list-disc space-y-3 pl-6">
          <li>Lessons 1–5 of this Association Masterclass.</li>

          <li>Understanding of Cardinality.</li>

          <li>Basic Association Navigation.</li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Introduction">
        <p>
          From a business perspective, the difference between
          <strong> TO ONE</strong> and
          <strong> TO MANY</strong>
          seems obvious.
        </p>

        <p>
          However, from the CDS compiler's perspective, the difference is much
          more significant.
        </p>

        <p>
          A TO ONE Association guarantees that navigation can never return more
          than one target record.
        </p>

        <p>A TO MANY Association provides no such guarantee.</p>

        <p>
          That single difference affects compiler validation, navigation,
          generated SQL and even which CDS constructs are permitted.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        Don't think of TO ONE and TO MANY as syntax.
        <br />
        <br />
        Think of them as promises made to the CDS compiler.
        <br />
        <br />
        TO ONE says:
        <br />
        <strong>
          "This navigation can never return more than one record."
        </strong>
        <br />
        <br />
        TO MANY says:
        <br />
        <strong>"Multiple records may exist. Plan accordingly."</strong>
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Understanding TO ONE Associations">
        <p>
          A TO ONE Association guarantees that each source record is related to
          at most one target record.
        </p>

        <CodeBlock
          title="TO ONE Association"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer

on $projection.SoldToParty = _Customer.Customer`}
        />

        <p>Business interpretation:</p>

        <blockquote className="rounded-lg border-l-4 border-green-600 bg-green-50 px-6 py-4 text-slate-700">
          One Sales Order has at most one Sold-To Customer.
        </blockquote>

        <p>
          Since only one Customer can exist, the compiler can safely navigate
          fields such as:
        </p>

        <CodeBlock
          title="Navigation"
          language="ABAP CDS"
          code={`_Customer.CustomerName`}
        />
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Understanding TO MANY Associations">
        <p>
          A TO MANY Association represents a relationship where multiple target
          records may exist.
        </p>

        <CodeBlock
          title="TO MANY Association"
          language="ABAP CDS"
          code={`association [0..*] to I_SalesDocumentItem as _Item

on $projection.SalesDocument = _Item.SalesDocument`}
        />

        <p>Business interpretation:</p>

        <blockquote className="rounded-lg border-l-4 border-orange-600 bg-orange-50 px-6 py-4 text-slate-700">
          One Sales Order may contain many Sales Order Items.
        </blockquote>

        <p>
          Since multiple Items may exist, navigation behaves differently and the
          compiler cannot make the same assumptions that it can for TO ONE
          Associations.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Why the CDS Compiler Cares">
        <p>Imagine the compiler receives the following navigation.</p>

        <CodeBlock
          title="Path Expression"
          language="ABAP CDS"
          code={`_Customer.CustomerName`}
        />

        <p>
          The compiler immediately knows that this navigation can return only a
          single CustomerName because the Association is TO ONE.
        </p>

        <p>Now consider:</p>

        <CodeBlock
          title="TO MANY Navigation"
          language="ABAP CDS"
          code={`_Item.Material`}
        />

        <p>The compiler now faces a completely different situation.</p>

        <p>
          One Sales Order may contain several Materials because multiple Items
          can exist.
        </p>

        <p>
          This uncertainty is the reason TO MANY Associations have additional
          restrictions compared with TO ONE Associations.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Reading Cardinality"
        thought="The compiler evaluates the declared Cardinality before deciding how navigation should behave."
        steps={[
          "Read the Association.",
          "Determine whether it is TO ONE or TO MANY.",
          "Check the requested path expression.",
          "Estimate how many target records may exist.",
          "Choose the appropriate navigation semantics.",
          "Continue SQL generation.",
        ]}
        decision="Cardinality directly influences how the compiler interprets Association navigation."
        performanceTip="Correct Cardinality gives the compiler accurate information. Incorrect Cardinality may lead to unexpected navigation behavior and inefficient SQL."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Why TO MANY Associations Have Restrictions">
        <p>
          This is one of the most frequently asked questions during interviews.
        </p>

        <blockquote className="rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4 text-slate-700">
          If Associations are just relationships, why are TO MANY Associations
          more restricted than TO ONE Associations?
        </blockquote>

        <p>The answer is simple.</p>

        <p>
          The compiler cannot predict which of the many matching records should
          be used.
        </p>

        <p>Consider the following relationship:</p>

        <CodeBlock
          title="Sales Order → Items"
          language="Text"
          code={`Sales Order 50000001

↓

Item 10

↓

Item 20

↓

Item 30`}
        />

        <p>Suppose you write:</p>

        <CodeBlock
          title="Path Expression"
          language="ABAP CDS"
          code={`_Item.Material`}
        />

        <p>Which Material should be returned?</p>

        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Item 10?</li>
          <li>Item 20?</li>
          <li>Item 30?</li>
        </ul>

        <p>The compiler has no deterministic answer.</p>

        <p>
          That uncertainty is exactly why TO MANY Associations are treated
          differently.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Why TO MANY Associations Cannot Always Be Used in WHERE">
        <p>
          One of the most common syntax errors developers encounter is trying to
          use a TO MANY Association inside a WHERE condition.
        </p>

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`where _Item.Material = 'TG11'`}
        />

        <p>
          This is not supported because the compiler cannot guarantee that the
          Association returns only one record.
        </p>

        <p>
          If three matching items exist, which one should be compared with
          <code>'TG11'</code>?
        </p>

        <ArchitectNote>
          This behavior is not an arbitrary CDS restriction.
          <br />
          <br />
          It exists to prevent ambiguous SQL semantics and protect developers
          from accidentally producing incorrect results.
        </ArchitectNote>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Generated SQL Perspective">
        <p>Let's compare how the compiler views two Associations.</p>

        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">TO ONE</th>

              <th className="border px-4 py-3 text-left">TO MANY</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Maximum one matching record.</td>

              <td className="border px-4 py-3">
                Multiple matching records possible.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Safe for scalar navigation.</td>

              <td className="border px-4 py-3">
                May produce duplicate source rows.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Compiler has deterministic semantics.
              </td>

              <td className="border px-4 py-3">
                Compiler must consider multiplicity.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Real SAP Examples">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Association</th>

              <th className="border px-4 py-3 text-left">Cardinality</th>

              <th className="border px-4 py-3 text-left">Why?</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Sales Order → Customer</td>

              <td className="border px-4 py-3">TO ONE</td>

              <td className="border px-4 py-3">
                A Sales Order has only one Sold-To Customer.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Sales Order → Items</td>

              <td className="border px-4 py-3">TO MANY</td>

              <td className="border px-4 py-3">
                A Sales Order may contain many Items.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Billing Document → Accounting Items
              </td>

              <td className="border px-4 py-3">TO MANY</td>

              <td className="border px-4 py-3">
                One Billing Document can create multiple Accounting Entries.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <RealWorldExample title="Why SAP Designed Associations This Way">
        Imagine the same Interface View is consumed by three different
        applications.
        <br />
        <br />
        • A Fiori List Report needs only Customer Name.
        <br />
        • A RAP service needs Sales Order Items.
        <br />
        • An Analytical Query needs both.
        <br />
        <br />
        SAP defines both TO ONE and TO MANY Associations once. Each consumer
        navigates only the Associations it requires.
        <br />
        <br />
        This makes SAP's Virtual Data Model highly reusable while allowing the
        CDS compiler to generate SQL appropriate for each consumer.
      </RealWorldExample>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        <strong>Technical Architect Insight</strong>
        <br />
        <br />
        Many developers think TO ONE and TO MANY exist only for documentation.
        <br />
        <br />
        They don't.
        <br />
        <br />
        The CDS compiler actively uses Cardinality information to validate path
        expressions, determine navigation semantics and optimize generated SQL.
        <br />
        <br />
        Declaring incorrect Cardinality is effectively providing incorrect
        metadata to the compiler.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <BestPractice>
        Always model Cardinality according to the business relationship.
        <br />
        <br />
        Never declare a TO ONE Association simply to bypass syntax restrictions.
        <br />
        <br />
        If the business relationship is genuinely TO MANY, model it as TO MANY
        and design your CDS View accordingly.
      </BestPractice>

      {/* ------------------------------------------------------------ */}

      <CommonMistakes
        items={[
          "Using TO ONE because it 'works'.",
          "Ignoring the actual business relationship.",
          "Using TO MANY Associations inside unsupported WHERE conditions.",
          "Assuming Cardinality affects only documentation.",
        ]}
      />

      {/* ------------------------------------------------------------ */}

      <InterviewQuestion
        level="Experienced"
        question="Why are TO MANY Associations more restricted than TO ONE Associations?"
        answer="Because multiple target records may exist. The CDS compiler cannot always determine a single deterministic result for navigation, filtering or scalar expressions."
      />

      <InterviewQuestion
        level="Architect"
        question="Can incorrect Cardinality affect compiler behavior?"
        answer="Yes. The CDS compiler trusts the declared Cardinality during validation and SQL generation. Incorrect Cardinality provides incorrect metadata, which can lead to invalid assumptions and unexpected behavior."
      />

      {/* ------------------------------------------------------------ */}

      <KeyTakeaway>
        <p>
          TO ONE and TO MANY are much more than different Cardinality values.
        </p>

        <p>
          They tell the CDS compiler whether navigation is guaranteed to return
          at most one record or whether multiple matching records are possible.
        </p>

        <p>
          This distinction directly influences compiler validation, generated
          SQL, supported language constructs and overall CDS behavior.
        </p>

        <p>
          In the next lesson, we'll compare <strong>Associations</strong> with
          traditional <strong>SQL JOINs</strong> and identify when each approach
          is most appropriate in ABAP Cloud development.
        </p>
      </KeyTakeaway>

      {/* ------------------------------------------------------------ */}

      <PrevNext
        prevTitle="Cardinality"
        prevHref="/tutorials/rap/cds-view-entity/association-cardinality"
        nextTitle="Lazy Loading"
        nextHref="/tutorials/rap/cds-view-entity/association-lazy-loading"
      />
    </TutorialLayout>
  );
}
