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
import CDSViewEntitySidebar from "@/components/tutorials/CDSViewEntitySidebar";
import CheatSheet from "@/components/tutorials/CheatSheet";

export default function Page() {
  return (
    <TutorialLayout
      title="COALESCE Expression in ABAP CDS View Entities"
      category="CDS View Entity"
      duration="35 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ContentSection title="Why Every ABAP Cloud Developer Should Understand COALESCE">
        <p>
          Among all built-in CDS expressions, COALESCE is one of the most
          misunderstood. Many developers assume it behaves like the SQL COALESCE
          function that replaces any empty or missing value.
        </p>

        <p>In ABAP CDS, the reality is quite different.</p>

        <p>
          Most database fields never become <strong>NULL</strong>. Instead, they
          usually contain an initial value such as
          <strong> 0</strong>, an empty string, or
          <strong> 00000000</strong>.
        </p>

        <p>
          COALESCE only replaces values that are truly NULL. Understanding where
          NULL comes from is therefore far more important than memorizing the
          COALESCE syntax itself.
        </p>

        <ImageBlock
          priority
          src="/images/rap/cds-view-entity/coalesce-expression.webp"
          alt="COALESCE Expression in ABAP CDS"
          caption="COALESCE replaces NULL values—not blank, zero, or initial values. In modern ABAP Cloud development, NULL most commonly originates from optional associations."
        />
      </ContentSection>

      <ContentSection title="Learning Objectives">
        <p>
          By the end of this lesson, you'll understand what NULL really means,
          where it originates in ABAP CDS, why associations play such an
          important role, and when COALESCE should—or should not—be used in
          production CDS View Entities.
        </p>

        <TableBlock
          title="After Completing This Lesson You Will Be Able To"
          headers={["Skill", "Description"]}
          rows={[
            [
              "Understand NULL",
              "Explain the difference between NULL and initial values.",
            ],
            [
              "Use COALESCE Correctly",
              "Replace NULL values only when appropriate.",
            ],
            [
              "Understand Associations",
              "Explain why optional associations frequently produce NULL values.",
            ],
            [
              "Avoid Common Mistakes",
              "Recognize situations where COALESCE has no effect.",
            ],
            [
              "Design Better CDS Views",
              "Handle optional master data in a clean, production-ready manner.",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="What is NULL?">
        <p>
          Before learning COALESCE, it's essential to understand what NULL
          actually represents.
        </p>

        <p>
          NULL does <strong>not</strong> mean zero, blank, space, or an initial
          value.
        </p>

        <p>NULL means:</p>

        <CodeBlock title="Meaning of NULL" code={`There is no value at all.`} />

        <p>The value simply does not exist.</p>

        <RealWorldExample title="Employee Example">
          <TableBlock
            headers={["Employee", "Manager"]}
            rows={[
              ["John", "David"],
              ["Mike", "NULL"],
            ]}
          />

          <p>Mike does not have a manager.</p>

          <p>
            The value is not blank. The value is not an empty string. There is
            simply no related value available.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="NULL is Different from Initial Values">
        <p>
          One of the biggest misconceptions among ABAP developers is treating
          NULL as another initial value.
        </p>

        <TableBlock
          title="NULL vs Initial Values"
          headers={["Initial Value", "NULL"]}
          rows={[
            ["0", "No value exists"],
            ["Blank ('')", "No value exists"],
            ["Space", "No value exists"],
            ["00000000", "No value exists"],
          ]}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Initial values exist. They simply contain a default value.
          <br />
          <br />
          NULL is fundamentally different because the database has no value to
          return.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Why ABAP Developers Rarely Think About NULL">
        <p>Classical ABAP does not support NULL values for normal variables.</p>

        <CodeBlock
          title="ABAP"
          language="ABAP"
          code={`DATA lv_amount TYPE p.`}
        />

        <p>
          If no value is assigned, the variable automatically receives its
          initial value.
        </p>

        <CodeBlock title="Initial Value" code={`0`} />

        <p>
          This is one of the reasons many experienced ABAP developers are
          surprised when they first encounter NULL handling in CDS View
          Entities.
        </p>

        <BestPractice>
          <p>
            Remember this simple rule:
            <br />
            <br />
            <strong>ABAP variables become initial.</strong>
            <br />
            <strong>SQL expressions may become NULL.</strong>
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Where Does NULL Come From in ABAP CDS?">
        <p>
          In modern S/4HANA Public Cloud development, NULL values rarely
          originate from the primary data source.
        </p>

        <p>
          Instead, they most commonly appear when CDS follows an
          <strong> optional relationship</strong>.
        </p>

        <TableBlock
          title="Typical Sources of NULL"
          headers={["Source", "Can Produce NULL?"]}
          rows={[
            ["Primary Data Source", "Usually No"],
            ["LEFT OUTER JOIN", "Yes"],
            ["Association [0..1]", "Yes"],
            ["Association [1..1]", "Normally No"],
          ]}
        />

        <ArchitectNote>
          <strong>Most Important Concept</strong>
          <br />
          <br />
          In modern ABAP Cloud development, you'll encounter NULL values much
          more frequently through optional associations than through explicit
          LEFT OUTER JOIN statements.
          <br />
          <br />
          That's why understanding associations is the key to mastering
          COALESCE.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="What is the COALESCE Expression?">
        <p>
          The <strong>COALESCE</strong> expression returns the first expression
          if it contains a value. If that expression evaluates to
          <strong> NULL</strong>, COALESCE returns the alternative value
          provided as the second argument.
        </p>

        <CodeBlock
          title="Syntax"
          language="ABAP CDS"
          code={`coalesce( expression1, expression2 )`}
        />

        <TableBlock
          title="Parameters"
          headers={["Parameter", "Description"]}
          rows={[
            ["expression1", "The expression that may evaluate to NULL."],
            [
              "expression2",
              "The default value returned when expression1 is NULL.",
            ],
          ]}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          COALESCE does not replace empty strings, zero, blank spaces, or other
          initial values.
          <br />
          <br />
          It only replaces values that are actually NULL.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="How COALESCE Works">
        <p>The execution logic of COALESCE is very straightforward.</p>

        <CodeBlock
          title="Execution Flow"
          code={`Is expression1 NULL?
        │
   ┌────┴────┐
   │         │
  Yes       No
   │         │
Return      Return
expression2 expression1`}
        />

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`coalesce(
    _Product.ProductName,
    'Unknown Product'
)`}
        />

        <TableBlock
          title="Result"
          headers={["Product Name", "Returned Value"]}
          rows={[
            ["Laptop", "Laptop"],
            ["NULL", "Unknown Product"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Why Associations Matter">
        <p>
          Modern ABAP Cloud development strongly encourages the use of
          associations instead of explicit LEFT OUTER JOIN statements in CDS
          View Entities.
        </p>

        <p>
          Consequently, most NULL values encountered in production CDS Views
          originate from optional associations rather than the primary data
          source.
        </p>

        <CodeBlock
          title="Association Example"
          language="ABAP CDS"
          code={`association [0..1] to I_Product as _Product
    on $projection.Material = _Product.Product`}
        />

        <p>
          The cardinality <strong>[0..1]</strong> means that a related Product
          record may or may not exist.
        </p>

        <p>
          If no Product is found, every field exposed through
          <strong> _Product</strong> evaluates to NULL.
        </p>

        <BestPractice>
          <p>
            When working with optional master data such as Product, Customer,
            Supplier, Employee, or Business Partner, always consider whether a
            default value should be returned instead of NULL.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Practice Example 1 - Product Description">
        <p>
          This is one of the most common production scenarios in SAP S/4HANA
          Public Cloud.
        </p>

        <CodeBlock
          title="CDS Example"
          language="ABAP CDS"
          code={`define view entity ZI_PRODUCT_INFO
  as select from I_SalesDocumentItem

  association [0..1] to I_Product as _Product
      on $projection.Material = _Product.Product
{
    key SalesDocument,

    Material,

    coalesce(
        _Product.ProductName,
        'Unknown Product'
    ) as ProductName
}`}
        />

        <RealWorldExample title="Business Scenario">
          <p>
            A Sales Order still exists, but the corresponding Product has been
            archived or is no longer available.
          </p>

          <p>
            Instead of returning NULL to the Fiori application, the CDS View
            displays <strong>"Unknown Product"</strong>, providing a better user
            experience.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Practice Example 2 - Customer Name">
        <CodeBlock
          title="Customer Association"
          language="ABAP CDS"
          code={`association [0..1] to I_Customer as _Customer
    on $projection.SoldToParty = _Customer.Customer

coalesce(
    _Customer.CustomerName,
    'Customer Deleted'
) as CustomerName`}
        />

        <p>
          This pattern is frequently used in reporting applications where
          historical documents remain available even after the associated
          customer master data has been removed or is no longer accessible.
        </p>
      </ContentSection>

      <ContentSection title="Practice Example 3 - Supplier Name">
        <CodeBlock
          title="Supplier Association"
          language="ABAP CDS"
          code={`association [0..1] to I_Supplier as _Supplier
    on $projection.Supplier = _Supplier.Supplier

coalesce(
    _Supplier.SupplierName,
    'No Supplier'
) as SupplierName`}
        />

        <p>
          Returning a meaningful default value makes analytical reports easier
          to understand than exposing NULL values directly to business users.
        </p>
      </ContentSection>

      <ContentSection title="Understanding Association Cardinality">
        <TableBlock
          title="When is COALESCE Useful?"
          headers={["Cardinality", "Can Return NULL?", "COALESCE Recommended?"]}
          rows={[
            ["[1..1]", "Normally No", "Usually unnecessary"],
            ["[0..1]", "Yes", "Yes"],
            [
              "[0..*]",
              "Multiple records",
              "Cannot project a single field directly",
            ],
          ]}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          COALESCE works with scalar expressions.
          <br />
          <br />A to-many association (<strong>[0..*]</strong>) does not
          represent a single value, so an expression such as:
          <br />
          <br />
          <CodeBlock
            language="ABAP CDS"
            code={`coalesce(
    _Items.Material,
    'N/A'
)`}
          />
          is not valid because <strong>_Items.Material</strong> is not a single
          scalar value.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Real SAP Production Scenarios">
        <TableBlock
          title="Common Uses of COALESCE"
          headers={["Business Object", "Default Value"]}
          rows={[
            ["Product", "'Unknown Product'"],
            ["Customer", "'Customer Deleted'"],
            ["Supplier", "'No Supplier'"],
            ["Employee", "'Former Employee'"],
            ["Business Partner", "'Deleted Business Partner'"],
          ]}
        />

        <BestPractice>
          <p>
            COALESCE is particularly valuable when displaying optional master
            data in analytical reports and RAP applications. Returning a
            meaningful business description is almost always preferable to
            exposing NULL values directly to end users.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Common Mistakes">
        <p>
          Although the COALESCE expression is simple, it is frequently
          misunderstood. Most mistakes occur because developers assume it
          replaces initial values instead of NULL values.
        </p>

        <CommonMistakes
          items={[
            "Using COALESCE on fields from the primary data source that can never be NULL.",
            "Expecting COALESCE to replace 0, blank ('') or initial values.",
            "Using COALESCE instead of CASE for business rules.",
            "Applying COALESCE to to-many associations ([0..*]).",
            "Adding COALESCE simply because a field is optional without understanding the data model.",
          ]}
        />
      </ContentSection>

      <ContentSection title="Why COALESCE(NetAmount, 0) Usually Has No Effect">
        <p>
          One of the most common mistakes is applying COALESCE to amount or
          quantity fields coming directly from the primary data source.
        </p>

        <CodeBlock
          title="Common Mistake"
          language="ABAP CDS"
          code={`coalesce(
    NetAmount,
    0
) as NetAmount`}
        />

        <p>
          In most CDS View Entities, <strong>NetAmount</strong> is a field from
          the base data source. If no value exists, it usually contains its
          initial value rather than NULL.
        </p>

        <TableBlock
          title="Why This Doesn't Help"
          headers={["Field", "Typical Value", "COALESCE Required?"]}
          rows={[
            ["NetAmount", "0.00", "❌ No"],
            ["Quantity", "0", "❌ No"],
            ["CreationDate", "00000000", "❌ No"],
            ["_Product.ProductName", "NULL", "✅ Yes"],
          ]}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Ask yourself one question before writing COALESCE:
          <br />
          <br />
          <strong>Can this expression actually evaluate to NULL?</strong>
          <br />
          <br />
          If the answer is no, COALESCE adds no value.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Why COALESCE(Material, 'N/A') Is Usually Unnecessary">
        <CodeBlock
          title="Unnecessary COALESCE"
          language="ABAP CDS"
          code={`coalesce(
    Material,
    'N/A'
) as Material`}
        />

        <p>
          Since <strong>Material</strong> originates from the primary data
          source, it typically contains either a valid value or its initial
          value—not NULL.
        </p>

        <p>
          In this situation, COALESCE will almost never change the returned
          result.
        </p>

        <BestPractice>
          <p>
            Reserve COALESCE for expressions that may actually become NULL,
            especially fields accessed through optional associations.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="COALESCE vs CASE">
        <p>
          Although both expressions can return alternative values, they solve
          different problems.
        </p>

        <TableBlock
          title="CASE vs COALESCE"
          headers={["CASE", "COALESCE"]}
          rows={[
            ["Evaluates business conditions.", "Checks only for NULL."],
            ["Supports multiple WHEN branches.", "Supports two expressions."],
            ["Ideal for classifications.", "Ideal for optional relationships."],
            ["Can evaluate numeric ranges.", "Cannot evaluate conditions."],
          ]}
        />

        <CodeBlock
          title="Use CASE"
          language="ABAP CDS"
          code={`case
    when NetAmount = 0 then 'Free'
    else 'Paid'
end`}
        />

        <CodeBlock
          title="Use COALESCE"
          language="ABAP CDS"
          code={`coalesce(
    _Product.ProductName,
    'Unknown Product'
)`}
        />

        <ArchitectNote>
          <strong>Remember</strong>
          <br />
          <br />
          CASE evaluates conditions.
          <br />
          COALESCE replaces NULL.
          <br />
          They are complementary—not interchangeable.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="COALESCE with Aggregate Functions">
        <p>COALESCE can also be used together with aggregate functions.</p>

        <CodeBlock
          title="Example"
          language="ABAP CDS"
          code={`coalesce(
    sum( NetAmount ),
    0
) as TotalAmount`}
        />

        <p>
          However, there is an important detail that experienced CDS developers
          should understand.
        </p>

        <RealWorldExample title="Grouped CDS View">
          <p>
            In a grouped CDS View, every group already contains at least one
            row. Therefore, <strong>SUM()</strong> normally returns a value and
            not NULL.
          </p>

          <p>
            As a result, wrapping <strong>SUM()</strong> with COALESCE is often
            unnecessary unless there is a realistic possibility that the
            aggregate expression itself can evaluate to NULL.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Performance Considerations">
        <p>
          COALESCE is executed directly in SAP HANA as part of the SQL statement
          and fully participates in code pushdown.
        </p>

        <TableBlock
          title="Performance Recommendations"
          headers={["Recommendation", "Reason"]}
          rows={[
            [
              "Use COALESCE only where NULL is possible.",
              "Keeps CDS Views clean and readable.",
            ],
            [
              "Prefer associations over explicit joins in ABAP Cloud.",
              "Aligns with SAP's VDM and RAP design principles.",
            ],
            [
              "Avoid unnecessary COALESCE expressions.",
              "Improves maintainability.",
            ],
            [
              "Return meaningful business values.",
              "Provides a better user experience in Fiori apps.",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What does the COALESCE expression do?"
          answer="COALESCE returns the first expression if it is not NULL; otherwise it returns the second expression."
        />

        <InterviewQuestion
          level="Beginner"
          question="Does COALESCE replace blank values or zero?"
          answer="No. COALESCE replaces only NULL values, not blank strings, spaces, zero, or other initial values."
        />

        <InterviewQuestion
          level="Experienced"
          question="Where do NULL values usually originate in ABAP CDS?"
          answer="Most NULL values originate from optional relationships such as LEFT OUTER JOIN or associations with cardinality [0..1]."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why is COALESCE commonly used with associations?"
          answer="Because optional associations may not find a matching record, causing associated fields to evaluate to NULL."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why is COALESCE(NetAmount, 0) usually unnecessary?"
          answer="NetAmount from the primary data source typically contains an initial value such as 0.00 rather than NULL, so COALESCE has no effect."
        />

        <InterviewQuestion
          level="Experienced"
          question="Can COALESCE be used with a [0..*] association?"
          answer="No. A to-many association does not represent a single scalar value, so it cannot be passed directly to COALESCE."
        />

        <InterviewQuestion
          level="Architect"
          question="When should you prefer CASE over COALESCE?"
          answer="Use CASE for business rules and conditional logic. Use COALESCE only when replacing NULL values."
        />

        <InterviewQuestion
          level="Architect"
          question="Why is COALESCE inexpensive from a performance perspective?"
          answer="It is evaluated directly in SAP HANA as part of the SQL statement and therefore benefits from code pushdown."
        />
      </ContentSection>

      <CheatSheet
        icon="🧩"
        title="COALESCE Expression Cheat Sheet"
        stats="NULL Handling • Optional Associations • SAP HANA Pushdown"
        description="This quick reference summarizes the key concepts of the COALESCE() function in ABAP CDS. It highlights where NULL values originate, when COALESCE() should be used, and common mistakes to avoid in production-ready CDS View Entities."
      >
        <TableBlock
          headers={["Topic", "Syntax / Value", "Summary"]}
          rows={[
            [
              "Purpose",
              "coalesce(expr1, expr2)",
              "Returns expr2 only when expr1 is NULL; otherwise returns expr1.",
            ],
            [
              "Typical NULL Source",
              "[0..1] Association",
              "Most NULL values originate from optional associations or LEFT OUTER JOINs.",
            ],
            [
              "Works on Initial Values?",
              "❌ No",
              "Initial values such as '', 0, or '00000000' are not NULL.",
            ],
            [
              "CASE Replacement?",
              "❌ No",
              "CASE evaluates conditions, whereas COALESCE() only replaces NULL values.",
            ],
            [
              "To-Many Association",
              "❌ Not Supported",
              "Fields from [0..*] associations cannot be passed directly to COALESCE().",
            ],
            [
              "Performance",
              "SAP HANA",
              "Evaluated directly in the database as part of code pushdown.",
            ],
            [
              "Common Usage",
              "Product, Customer, Supplier",
              "Display fallback values such as 'Unknown Product' or 'Deleted Customer'.",
            ],
          ]}
        />
      </CheatSheet>

      <KeyTakeaway>
        <p>
          COALESCE is not a general-purpose replacement for empty or initial
          values. Its sole purpose is to replace <strong>NULL</strong>
          expressions with a meaningful alternative value.
        </p>

        <p>
          In modern ABAP Cloud development, NULL values most commonly originate
          from optional associations rather than the primary data source.
          Understanding association cardinality is therefore just as important
          as understanding the COALESCE syntax itself.
        </p>

        <p>
          When used appropriately, COALESCE improves the user experience by
          replacing missing master data with meaningful business descriptions,
          making RAP applications and analytical reports easier to understand.
        </p>
      </KeyTakeaway>

      <ContentSection title="Watch the Complete ADT Walkthrough">
        <p>
          In the accompanying video, we'll build practical CDS View Entities
          using optional associations, observe how NULL values are produced, and
          learn when COALESCE should—and should not—be used in SAP S/4HANA
          Public Cloud development.
        </p>

        {/* TODO: Replace with YouTube component */}
      </ContentSection>

      <PrevNext
        prevTitle="CASE Expressions"
        prevHref="/tutorials/rap/cds-view-entity/case-expressions"
        nextTitle="String Functions"
        nextHref="/tutorials/rap/cds-view-entity/string-functions"
      />
    </TutorialLayout>
  );
}
