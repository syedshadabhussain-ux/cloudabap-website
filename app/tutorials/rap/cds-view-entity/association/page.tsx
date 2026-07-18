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
      title="Associations in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="90 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ImageBlock
        src="/images/rap/cds-view-entity/association/assiciations.webp"
        alt="Associations in ABAP CDS View Entity"
        caption="Master Associations from beginner to SAP Technical Architect with real-world examples, generated SQL, compiler behavior, and SAP best practices."
      />
      <ContentSection title="Association Masterclass">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">Lesson 1 of 15</h3>

          <p className="mt-2 text-slate-700">
            This lesson introduces the fundamental concept of Associations,
            explains why SAP introduced them, and lays the foundation for the
            rest of the Association Masterclass.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg bg-green-100 px-4 py-3 font-semibold text-green-800">
              ✅ Introduction
            </div>

            <div className="rounded-lg bg-slate-100 px-4 py-3">
              ⏳ Cardinality
            </div>

            <div className="rounded-lg bg-slate-100 px-4 py-3">
              ⏳ Generated SQL
            </div>

            <div className="rounded-lg bg-slate-100 px-4 py-3">
              ⏳ MANY TO ONE
            </div>

            <div className="rounded-lg bg-slate-100 px-4 py-3">
              ⏳ Path Expressions
            </div>

            <div className="rounded-lg bg-slate-100 px-4 py-3">
              ⏳ Performance
            </div>
          </div>
        </div>
      </ContentSection>
      <ContentSection title="Learning Objectives">
        <p>By the end of this lesson, you will be able to:</p>

        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Understand why SAP introduced Associations in ABAP CDS.</li>

          <li>Explain the difference between an Association and a SQL JOIN.</li>

          <li>Understand how Associations model business relationships.</li>

          <li>Write your first Association in a CDS View Entity.</li>

          <li>
            Prepare for advanced topics such as Cardinality, Generated SQL, Path
            Expressions, and Performance.
          </li>
        </ul>
      </ContentSection>
      <ContentSection title="Prerequisites">
        <p>Before starting this lesson, you should already be familiar with:</p>

        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Basic SQL JOIN concepts.</li>

          <li>ABAP CDS View Entity syntax.</li>

          <li>Released Interface Views in SAP S/4HANA Public Cloud.</li>
        </ul>
      </ContentSection>
      <ContentSection title="Introduction">
        <p>
          Associations are one of the most important concepts in modern ABAP CDS
          development. They are the foundation of SAP's Virtual Data Model (VDM)
          and are extensively used throughout SAP S/4HANA Public Cloud, RAP
          applications, and Fiori services.
        </p>

        <p>
          If you browse SAP's released Interface Views such as
          <strong> I_SalesDocument</strong>,<strong> I_BillingDocument</strong>,
          <strong> I_PurchaseOrder</strong>, or
          <strong> I_Product</strong>, you will notice that SAP rarely writes
          explicit JOIN statements. Instead, relationships between business
          objects are defined using Associations.
        </p>

        <p>
          Understanding Associations is therefore not optional. It is one of the
          core skills expected from every ABAP Cloud developer and SAP Technical
          Architect.
        </p>
      </ContentSection>
      <ArchitectNote>
        Most developers initially think that an Association is simply another
        way of writing a LEFT OUTER JOIN.
        <br />
        <br />
        This is the biggest misconception in ABAP CDS.
        <br />
        <br />
        An Association defines a business relationship. It does not retrieve any
        data by itself. The actual SQL JOIN is generated later by the CDS
        compiler only when the relationship is navigated.
      </ArchitectNote>
      <ContentSection title="Why Did SAP Introduce Associations?">
        <p>
          Before ABAP CDS, applications typically relied on explicit SQL JOINs
          whenever data from multiple tables was required.
        </p>

        <CodeBlock
          title="Traditional SQL"
          language="SQL"
          code={`SELECT ...

FROM VBAK

LEFT OUTER JOIN VBAP

ON VBAK.VBELN = VBAP.VBELN

LEFT OUTER JOIN KNA1

ON VBAK.KUNNR = KNA1.KUNNR

LEFT OUTER JOIN MAKT

ON VBAP.MATNR = MAKT.MATNR`}
        />

        <p>
          Although this approach works, enterprise applications become
          increasingly difficult to maintain as every new consumer writes
          another set of JOIN statements.
        </p>
      </ContentSection>
      <ContentSection title="Problems with Traditional SQL JOINs">
        <TableBlock
          headers={["Problem", "Impact"]}
          rows={[
            [
              "JOIN logic repeated in every CDS View.",
              "Duplicate implementation and maintenance effort.",
            ],
            ["Large SQL statements.", "Reduced readability."],
            ["Business relationships hidden inside SQL.", "Poor reusability."],
            [
              "Changing a relationship requires modifying multiple views.",
              "Higher maintenance cost.",
            ],
            [
              "Consumers often execute unnecessary JOINs.",
              "Reduced performance.",
            ],
          ]}
        />
      </ContentSection>
      <ContentSection title="SAP's Solution">
        <p>
          SAP introduced Associations to separate
          <strong> relationship definition</strong> from
          <strong> relationship usage</strong>.
        </p>

        <p>
          Instead of repeatedly writing SQL JOIN statements, developers define
          the relationship once and allow the CDS compiler to generate the
          appropriate SQL only when required.
        </p>

        <CodeBlock
          title="First Association"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer

on $projection.SoldToParty = _Customer.Customer`}
        />

        <p>
          Notice that no customer fields are selected yet. At this stage, the
          Association simply documents how a Sales Order is related to a
          Customer.
        </p>
      </ContentSection>
      <ContentSection title="Association vs SQL JOIN">
        <p>
          One of the biggest misconceptions among ABAP developers is assuming
          that an Association is simply another syntax for a LEFT OUTER JOIN.
          Although both concepts relate data from different business objects,
          they serve fundamentally different purposes.
        </p>

        <TableBlock
          headers={["Association", "SQL JOIN"]}
          rows={[
            [
              "Defines a reusable business relationship.",
              "Immediately combines data from multiple data sources.",
            ],
            ["Lazy by nature.", "Executed immediately."],
            [
              "No SQL is generated until navigation occurs.",
              "SQL is generated as soon as the statement executes.",
            ],
            [
              "Can be reused by multiple consumers.",
              "Must be rewritten wherever needed.",
            ],
            [
              "Preferred in SAP's Virtual Data Model (VDM).",
              "Still useful for specific scenarios but less reusable.",
            ],
          ]}
        />
      </ContentSection>
      <ContentSection title="Real SAP Example">
        <p>
          Consider the released Interface View
          <strong> I_SalesDocument</strong>. A sales document stores only the
          Sold-To Party number. Customer details reside in a separate business
          object.
        </p>

        <CodeBlock
          title="Association Definition"
          language="ABAP CDS"
          code={`define view entity ZI_SalesOrder

  as select from I_SalesDocument

  association [0..1] to I_Customer as _Customer

    on $projection.SoldToParty = _Customer.Customer

{

    key SalesDocument,

    SoldToParty

}`}
        />

        <p>
          At this point, no customer information is retrieved. The CDS View
          simply records that a Sales Document has a relationship with a
          Customer.
        </p>
      </ContentSection>
      <ContentSection title="Navigating an Association">
        <p>
          Once a consumer requests a field from the association, the CDS
          compiler generates the appropriate SQL JOIN automatically.
        </p>

        <CodeBlock
          title="Association Navigation"
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
          Simply adding <strong>_Customer.CustomerName</strong> changes the SQL
          generated by the CDS compiler. We will examine this behavior in detail
          in Lesson 4 when we discuss lazy loading and generated SQL.
        </p>
      </ContentSection>
      {/* ThinkLikeCompiler Component will replace this section later */}
      <ThinkLikeCompiler
        title="Association Is Defined but Not Navigated"
        thought="The developer created an Association between Sales Orders and Customers, but no customer fields are requested in the SELECT list."
        steps={[
          "Association metadata is available in the CDS View.",
          "No path expression (_Customer.<field>) is accessed.",
          "Customer table is not required for the current result set.",
          "The CDS compiler skips SQL JOIN generation.",
        ]}
        decision="Execute the query using only the primary data source without generating a JOIN."
        performanceTip="Unused Associations do not generate SQL JOINs. This lazy behavior helps reduce unnecessary database processing and is one of the major advantages of Associations in SAP's Virtual Data Model."
      />
      <RealWorldExample title="Why SAP Uses Associations Everywhere">
        Open almost any released Interface View in SAP S/4HANA Public Cloud and
        you'll notice that business objects are connected through Associations
        rather than explicit JOIN statements.
        <br />
        <br />
        This makes Interface Views reusable for multiple applications while
        allowing the CDS compiler to generate only the SQL that is actually
        required by each consumer.
      </RealWorldExample>
      <BestPractice>
        Define Associations whenever you are modeling a reusable business
        relationship.
        <br />
        <br />
        Avoid writing explicit JOIN statements in Interface Views unless the
        relationship is truly local to that view or cannot be expressed through
        an Association.
      </BestPractice>
      <CommonMistakes
        items={[
          "Thinking an Association immediately executes a SQL JOIN.",
          "Assuming Associations always improve performance regardless of usage.",
          "Using Associations without understanding the underlying business relationship.",
          "Treating Associations as a replacement for every SQL JOIN.",
        ]}
      />
      <ContentSection title="Key Points to Remember">
        <TableBlock
          headers={["Concept", "Remember"]}
          rows={[
            ["Association", "Defines a business relationship."],
            ["JOIN", "Retrieves data."],
            ["Association Execution", "No SQL until navigation."],
            ["Primary Benefit", "Reusability and maintainability."],
            ["SAP Recommendation", "Prefer Associations in Interface Views."],
          ]}
        />
      </ContentSection>
      <InterviewQuestion
        level="Beginner"
        question="What is an Association in ABAP CDS?"
        answer="An Association defines a reusable relationship between two business objects. It does not retrieve data by itself."
      />
      <InterviewQuestion
        level="Experienced"
        question="What is the primary difference between an Association and a SQL JOIN?"
        answer="An Association models a business relationship and allows the CDS compiler to generate SQL only when required. A SQL JOIN immediately combines data from multiple data sources."
      />
      <InterviewQuestion
        level="Architect"
        question="Why does SAP recommend Associations throughout the Virtual Data Model?"
        answer="Associations promote reuse, improve maintainability, support lazy SQL generation, reduce duplicated JOIN logic, and allow the CDS compiler to optimize generated SQL for different consumers."
      />
      <KeyTakeaway>
        <p>
          Associations are not another way of writing JOINs. They are reusable
          relationship definitions that describe how business objects are
          connected. The CDS compiler later decides whether those relationships
          need to become SQL JOINs based on how the Association is used.
        </p>

        <p>
          Understanding this distinction is the foundation for every advanced
          Association topic that follows, including Cardinality, Generated SQL,
          Path Expressions, and Performance Optimization.
        </p>
      </KeyTakeaway>
      \
      <PrevNext
        prevTitle="Conversion Functions"
        prevHref="/tutorials/rap/cds-view-entity/conversion-functions"
        nextTitle="First Association"
        nextHref="/tutorials/rap/cds-view-entity/association-first-association"
      />
    </TutorialLayout>
  );
}
