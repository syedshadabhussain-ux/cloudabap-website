import SyntaxBreakdown from "@/components/tutorials/SyntaxBreakdown";
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
      title="Creating Your First Association in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="45 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      {/* Hero Image */}

      <ImageBlock
        src="/images/rap/cds-view-entity/association/association-master.webp"
        alt="Creating Your First Association in ABAP CDS View Entities"
        caption="Learn how to create your first Association, understand every keyword in the syntax, and prepare for advanced topics such as path expressions, cardinality, and generated SQL."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association Masterclass">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Lesson 2 of 15 – Creating Your First Association
          </h3>

          <p className="mt-2 text-slate-700">
            In Lesson 1, we learned why SAP introduced Associations and how they
            differ from traditional SQL JOINs. In this lesson, you'll write your
            first Association and understand every keyword that makes up an
            Association definition.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg bg-green-100 px-4 py-3 font-semibold text-green-800">
              ✅ Introduction
            </div>

            <div className="rounded-lg bg-green-100 px-4 py-3 font-semibold text-green-800">
              ✅ Why Associations
            </div>

            <div className="rounded-lg bg-blue-100 px-4 py-3 font-semibold text-blue-800">
              ▶ Creating Your First Association
            </div>

            <div className="rounded-lg bg-slate-100 px-4 py-3">
              ⏳ Navigation
            </div>

            <div className="rounded-lg bg-slate-100 px-4 py-3">
              ⏳ Cardinality
            </div>

            <div className="rounded-lg bg-slate-100 px-4 py-3">
              ⏳ Generated SQL
            </div>
          </div>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Learning Objectives">
        <p>By the end of this lesson, you will be able to:</p>

        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Create your first Association in a CDS View Entity.</li>

          <li>Understand every keyword used in the Association syntax.</li>

          <li>Explain the purpose of the ON condition.</li>

          <li>Understand why Associations require an alias.</li>

          <li>
            Prepare for advanced topics such as path expressions, cardinality,
            and generated SQL.
          </li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Prerequisites">
        <ul className="list-disc space-y-3 pl-6">
          <li>Basic SQL JOIN concepts.</li>

          <li>ABAP CDS View Entity fundamentals.</li>

          <li>Completion of Lesson 1 of this Association Masterclass.</li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Introduction">
        <p>
          Almost every released Interface View delivered by SAP contains one or
          more Associations. Whether you're working with Sales Orders, Purchase
          Orders, Business Partners, Products, or Journal Entries, Associations
          are the mechanism SAP uses to connect business objects throughout the
          Virtual Data Model (VDM).
        </p>

        <p>
          Although the syntax may initially appear unfamiliar, it is actually
          very logical. Each keyword has a single responsibility, and once you
          understand those responsibilities, reading and writing Associations
          becomes straightforward.
        </p>

        <p>
          In this lesson, we won't focus on advanced concepts such as
          cardinality, generated SQL, or lazy loading. Instead, we'll build a
          solid foundation by understanding how an Association is written before
          exploring how the CDS compiler uses it.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        Most developers try to memorize the complete Association syntax.
        <br />
        <br />
        A much better approach is to understand what each keyword represents.
        <br />
        <br />
        Once you know the purpose of every keyword, you can read almost any SAP
        Interface View without referring to documentation.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="General Association Syntax">
        <p>
          Every Association follows the same structure regardless of the source
          or target business object.
        </p>

        <CodeBlock
          title="General Association Syntax"
          language="ABAP CDS"
          code={`association [min..max] to Target_CDS_View as _Association

on <relationship condition>`}
        />

        <p>
          Although this statement contains only a few keywords, each one plays
          an important role in defining the relationship between two business
          objects.
        </p>

        <p>
          Before writing our first real Association, let's understand the
          responsibility of every keyword.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <SyntaxBreakdown
        title="Breaking Down the Association Syntax"
        subtitle="Understand each keyword before writing your first Association."
        syntax="association [0..1] to I_Customer as _Customer on $projection.SoldToParty = _Customer.Customer"
        items={[
          {
            syntax: "association",
            meaning: "Starts an Association definition.",
            details:
              "Every reusable relationship between two business objects begins with the association keyword.",
          },
          {
            syntax: "[0..1]",
            meaning: "Defines the cardinality.",
            details:
              "It specifies how many target records may exist for one source record. We'll study cardinality in detail in a dedicated lesson.",
          },
          {
            syntax: "to",
            meaning: "Specifies the target CDS View.",
          },
          {
            syntax: "I_Customer",
            meaning:
              "The released Interface View representing the target business object.",
          },
          {
            syntax: "as",
            meaning: "Introduces an alias for the Association.",
          },
          {
            syntax: "_Customer",
            meaning:
              "The Association name used later for navigation through path expressions.",
          },
          {
            syntax: "on",
            meaning: "Defines the relationship condition.",
          },
          {
            syntax: "$projection",
            meaning: "Represents the current CDS View.",
            details:
              "Fields from the current view are compared with fields from the target view to establish the relationship.",
          },
        ]}
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Reading an Association Like a Sentence">
        <p>
          One of the easiest ways to understand Associations is to read the
          syntax as if it were an English sentence rather than a programming
          statement.
        </p>

        <CodeBlock
          title="Association Example"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer

on $projection.SoldToParty = _Customer.Customer`}
        />

        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6">
          <p className="text-lg leading-8 text-slate-800">
            This CDS View has an Association to the business object
            <strong> I_Customer</strong>, known as
            <strong> _Customer</strong>, where the current Sales Order's
            <strong> SoldToParty</strong> matches the Customer field in the
            target business object.
          </p>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Creating Your First Association">
        <p>
          Now that you understand the syntax, let's create a real Association
          using SAP released Interface Views. We'll create a relationship
          between a Sales Document and its Sold-To Customer.
        </p>

        <CodeBlock
          title="Your First Association"
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
          Notice that although the Association has been defined, no customer
          fields are selected. At this stage, we've only described the business
          relationship between the two business objects.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Understanding the ON Condition">
        <p>
          Every Association requires an <strong>ON</strong> condition. This
          condition tells the CDS compiler how records from the source business
          object relate to records in the target business object.
        </p>

        <CodeBlock
          title="Relationship Condition"
          language="ABAP CDS"
          code={`$projection.SoldToParty = _Customer.Customer`}
        />

        <p>Read this condition as:</p>

        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <p className="text-lg leading-8 text-slate-800">
            Match the <strong>SoldToParty</strong> field from the current CDS
            View with the <strong>Customer</strong> field of the target
            Interface View.
          </p>
        </div>

        <p>
          This relationship definition is stored inside the CDS View. The CDS
          compiler later uses it whenever the Association is navigated.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Understanding $projection">
        <p>
          One keyword that often confuses beginners is
          <strong> $projection</strong>.
        </p>

        <p>Simply remember this rule:</p>

        <div className="rounded-xl border border-green-200 bg-green-50 p-6">
          <h3 className="mb-3 text-lg font-bold text-green-800">
            Easy Rule to Remember
          </h3>

          <p className="leading-7 text-slate-700">
            <strong>$projection</strong> always refers to the current CDS View
            that you are building.
          </p>
        </div>

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`$projection.SoldToParty`}
        />

        <p>means:</p>

        <blockquote className="rounded-lg border-l-4 border-blue-500 bg-slate-50 px-6 py-4 italic text-slate-700">
          Use the <strong>SoldToParty</strong> field from the current CDS View.
        </blockquote>

        <ArchitectNote>
          Although direct field references are sometimes possible,
          <strong> $projection</strong> is SAP's recommended approach because it
          clearly indicates that the field belongs to the current CDS View and
          improves readability.
        </ArchitectNote>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Why Does the Alias Start with an Underscore?">
        <p>
          SAP follows a naming convention where Association aliases begin with
          an underscore (<strong>_</strong>).
        </p>

        <CodeBlock
          title="Association Alias"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer`}
        />

        <TableBlock
          headers={["Alias", "Purpose"]}
          rows={[
            [
              "_Customer",
              "Association used later for navigation through path expressions.",
            ],
            [
              "Customer",
              "Could easily be confused with a normal element in the CDS View.",
            ],
          ]}
        />

        <p>
          Although the underscore is technically a naming convention, SAP uses
          it consistently throughout all released Interface Views and it is
          considered a best practice for custom development as well.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Previewing the CDS View">
        <p>After activating the CDS View, you can preview the data in ADT.</p>

        <p>You'll notice something interesting:</p>

        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Sales Document is displayed.</li>

          <li>Sold-To Party is displayed.</li>

          <li>No customer information appears.</li>
        </ul>

        <p>
          This is expected because defining an Association does not
          automatically retrieve data from the target business object.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Association Created Successfully"
        thought="The CDS View defines a relationship to I_Customer, but no fields from the Association are requested."
        steps={[
          "Read the Association metadata.",
          "Validate the ON condition.",
          "Store the relationship definition.",
          "Check whether any path expression is used.",
          "No navigation found.",
          "Skip SQL JOIN generation.",
        ]}
        decision="Execute the query using only I_SalesDocument. The Association is stored for future use but no JOIN is generated."
        performanceTip="Associations are lazy. Defining them has almost no runtime cost until a consumer actually navigates the relationship."
      />

      {/* ------------------------------------------------------------ */}

      <RealWorldExample title="Standard SAP Interface Views">
        Open released Interface Views such as
        <strong> I_SalesDocument</strong>,<strong> I_PurchaseOrder</strong>,
        <strong> I_BillingDocument</strong>, or
        <strong> I_Product</strong>.
        <br />
        <br />
        You'll notice that SAP defines dozens of Associations even though many
        of them are not immediately used. This allows different applications to
        navigate only the relationships they require while keeping the Interface
        Views reusable.
      </RealWorldExample>

      {/* ------------------------------------------------------------ */}

      <BestPractice>
        Think of an Association as documenting a business relationship rather
        than retrieving data.
        <br />
        <br />
        Define reusable relationships once and allow different consumers to
        decide whether those relationships should be navigated.
      </BestPractice>

      {/* ------------------------------------------------------------ */}

      <CommonMistakes
        items={[
          "Trying to retrieve data immediately after defining an Association.",
          "Assuming the ON condition executes like a SQL JOIN.",
          "Using inconsistent alias names instead of SAP's underscore convention.",
          "Memorizing the syntax instead of understanding each keyword.",
        ]}
      />

      {/* ------------------------------------------------------------ */}

      <InterviewQuestion
        level="Beginner"
        question="What is the purpose of the ON condition in an Association?"
        answer="The ON condition defines how records from the source business object relate to records in the target business object."
      />

      <InterviewQuestion
        level="Experienced"
        question="Why is $projection used inside an Association?"
        answer="It refers to fields of the current CDS View and is used to build the relationship condition with the target business object."
      />

      <InterviewQuestion
        level="Architect"
        question="Why does SAP recommend naming Association aliases with an underscore?"
        answer="The underscore clearly distinguishes Associations from normal CDS elements, improves readability, and follows SAP's standard naming convention across released Interface Views."
      />

      {/* ------------------------------------------------------------ */}

      <KeyTakeaway>
        <p>
          An Association consists of only a few keywords, but each has a
          specific responsibility. Understanding those responsibilities is far
          more valuable than memorizing the syntax.
        </p>

        <p>
          At this stage, we've defined a business relationship but haven't yet
          retrieved any data from the target business object. In the next
          lesson, we'll learn how to navigate an Association using path
          expressions and see how the CDS compiler automatically generates SQL
          JOINs only when related fields are accessed.
        </p>
      </KeyTakeaway>

      {/* ------------------------------------------------------------ */}

      <PrevNext
        prevTitle="Why Associations"
        prevHref="/tutorials/rap/cds-view-entity/association"
        nextTitle="Navigation"
        nextHref="/tutorials/rap/cds-view-entity/association-navigation"
      />
    </TutorialLayout>
  );
}
