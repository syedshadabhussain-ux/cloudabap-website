import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import CodeBlock from "@/components/tutorials/CodeBlock";
import BestPractice from "@/components/tutorials/BestPractice";
import CommonMistakes from "@/components/tutorials/CommonMistakes";
import OutputPreview from "@/components/tutorials/OutputPreview";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import RealWorldExample from "@/components/tutorials/RealWorldExample";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";
import PrevNext from "@/components/tutorials/PrevNext";
import TableBlock from "@/components/tutorials/TableBlock";
import CDSViewEntitySidebar from "@/components/tutorials/CDSViewEntitySidebar";

export default function Page() {
  return (
    <TutorialLayout
      title="Create Your First CDS View Entity in ABAP Cloud"
      category="CDS View Entity"
      duration="45 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ContentSection title="Why Every RAP Application Starts with a CDS View Entity">
        <p>
          If you are developing applications in SAP S/4HANA Public Cloud or
          using the RESTful Application Programming Model (RAP), the very first
          artifact you will create is usually a <strong>CDS View Entity</strong>
          .
        </p>

        <p>
          CDS View Entities are much more than database views. They represent
          reusable business entities that can be consumed by RAP Business
          Objects, Fiori applications, OData Services, Embedded Analytics, APIs,
          and many other SAP technologies.
        </p>

        <p>
          Throughout this learning series, we will build a production-style CDS
          View Entity and gradually enhance it with built-in data types, CAST,
          CASE expressions, string functions, numeric functions, associations,
          aggregations, conversion functions, and other advanced features.
        </p>

        <p>
          Instead of creating unrelated examples for every lesson, we will
          continuously improve the same CDS View Entity so that you understand
          how real SAP applications evolve over time.
        </p>

        <ImageBlock
          priority
          src="/images/rap/cds-view-entity/cds-view-entity.webp"
          alt="Create Your First CDS View Entity"
          caption="Every modern RAP application begins with a CDS View Entity that represents a reusable business entity."
        />
      </ContentSection>

      <ContentSection title="What You Will Learn">
        <p>By the end of this lesson you will be able to:</p>

        <ul>
          <li>Create a CDS View Entity using Eclipse ADT.</li>
          <li>Understand why SAP introduced DEFINE VIEW ENTITY.</li>
          <li>Select the correct released Interface View.</li>
          <li>Understand every keyword in a CDS View Entity.</li>
          <li>Activate the CDS successfully.</li>
          <li>Preview data directly from ADT.</li>
          <li>Follow SAP Clean Core development principles.</li>
        </ul>
      </ContentSection>

      <ContentSection title="What Is a CDS View Entity?">
        <p>
          A CDS View Entity is SAP's strategic data modeling artifact for ABAP
          Cloud and SAP S/4HANA development.
        </p>

        <p>
          Unlike a traditional SQL View, a CDS View Entity combines business
          semantics, relationships, calculations, metadata, annotations, and
          security within a single reusable repository object.
        </p>

        <p>
          Once created, the same CDS View Entity can be reused by multiple SAP
          technologies without duplicating business logic.
        </p>

        <TableBlock
          title="Where CDS View Entities Are Used"
          headers={["Technology", "Purpose"]}
          rows={[
            ["RAP", "Business Objects and Transactional Applications"],
            ["Fiori Elements", "UI Generation"],
            ["OData Services", "REST APIs"],
            ["Embedded Analytics", "KPIs and Reports"],
            ["Custom Applications", "Reusable Business Data Model"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Why SAP Introduced DEFINE VIEW ENTITY">
        <p>
          Earlier versions of ABAP CDS used the
          <strong> DEFINE VIEW</strong> syntax, which generated an additional
          SQL View in the ABAP Dictionary.
        </p>

        <p>
          SAP later introduced
          <strong> DEFINE VIEW ENTITY</strong>, eliminating the need for
          generated SQL Views and simplifying the CDS repository model.
        </p>

        <p>
          Today, SAP recommends using
          <strong> DEFINE VIEW ENTITY</strong> for all new developments in SAP
          S/4HANA and ABAP Cloud.
        </p>

        <TableBlock
          title="DEFINE VIEW vs DEFINE VIEW ENTITY"
          headers={["Feature", "DEFINE VIEW", "DEFINE VIEW ENTITY"]}
          rows={[
            ["SQL View Generated", "Yes", "No"],
            ["Recommended for New Development", "No", "Yes"],
            ["ABAP Cloud", "Limited", "Fully Supported"],
            ["Repository Model", "Legacy", "Modern"],
          ]}
        />

        <BestPractice>
          <p>
            Always use <strong>DEFINE VIEW ENTITY</strong> when developing new
            CDS artifacts in SAP S/4HANA Public Cloud or ABAP Cloud.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Prerequisites">
        <p>
          Before creating your first CDS View Entity, make sure you have the
          following prerequisites in place.
        </p>

        <TableBlock
          title="Prerequisites"
          headers={["Requirement", "Description"]}
          rows={[
            [
              "ABAP Development Tools (ADT)",
              "Latest Eclipse with ABAP Development Tools installed",
            ],
            [
              "Development System",
              "SAP S/4HANA Public Cloud or ABAP Cloud System",
            ],
            [
              "Developer Extensibility",
              "Developer Extensibility must be enabled",
            ],
            [
              "Development Package",
              "A package where repository objects can be created",
            ],
            ["Authorization", "Permission to create repository objects"],
          ]}
        />

        <BestPractice>
          <p>
            Throughout this course we will use only released SAP artifacts,
            ensuring every example follows SAP's Clean Core and ABAP Cloud
            development guidelines.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Choosing the Right Naming Convention">
        <p>
          Consistent naming conventions make RAP applications much easier to
          understand and maintain. SAP recommends using meaningful prefixes for
          each CDS artifact.
        </p>

        <TableBlock
          title="Recommended Naming Convention"
          headers={["Artifact", "Prefix", "Example"]}
          rows={[
            ["Interface CDS", "ZI_", "ZI_PRODUCT"],
            ["Projection CDS", "ZC_", "ZC_PRODUCT"],
            ["Root CDS", "ZR_", "ZR_PRODUCT"],
            ["Behavior Definition", "ZI_", "ZI_PRODUCT"],
            ["Behavior Projection", "ZC_", "ZC_PRODUCT"],
            ["Metadata Extension", "ZC_", "ZC_PRODUCT_MDE"],
          ]}
        />

        <p>
          Throughout this learning series we will use
          <strong> ZI_PRODUCT</strong> as our primary CDS View Entity and extend
          it in future lessons.
        </p>
      </ContentSection>

      <ContentSection title="Choosing the Correct Data Source">
        <p>
          One of the biggest changes in ABAP Cloud is that developers should no
          longer access SAP database tables directly.
        </p>

        <p>
          Instead, SAP exposes released business objects through Interface CDS
          Views, identified by the prefix <strong>I_*</strong>.
        </p>

        <TableBlock
          title="Common Released Interface Views"
          headers={["Released View", "Business Object"]}
          rows={[
            ["I_Product", "Product Master"],
            ["I_BusinessPartner", "Business Partner"],
            ["I_Customer", "Customer"],
            ["I_Supplier", "Supplier"],
            ["I_SalesDocument", "Sales Order Header"],
            ["I_SalesDocumentItem", "Sales Order Item"],
            ["I_PurchaseOrderAPI01", "Purchase Order"],
          ]}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Modern SAP development is business-object centric rather than
          table-centric.
          <br />
          <br />
          Instead of asking which table stores the data, ask which released
          business entity provides it. This mindset is fundamental to ABAP
          Cloud, RAP, and SAP's Clean Core strategy.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Why We Are Using I_Product">
        <p>
          In this lesson we will build our CDS View Entity using the released
          Interface View <strong>I_Product</strong>.
        </p>

        <p>
          This object exposes Product Master data and is available in SAP
          S/4HANA Public Cloud for application development.
        </p>

        <RealWorldExample title="Why Not MARA?">
          <p>
            In classic ABAP development, product information was usually read
            directly from the MARA table.
          </p>

          <p>
            In ABAP Cloud, applications should consume the released business API
            <strong> I_Product</strong> instead of directly accessing SAP
            tables.
          </p>

          <p>
            This keeps applications upgrade-safe and compliant with SAP's Clean
            Core principles.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="Creating the CDS View Entity">
        <p>
          Eclipse ADT provides a wizard that automatically creates a new CDS
          Data Definition object.
        </p>

        <p>Follow these steps:</p>

        <ol>
          <li>Open your development package.</li>
          <li>Right-click the package.</li>
          <li>
            Select <strong>New → Repository Object</strong>.
          </li>
          <li>
            Select <strong>Core Data Services → Data Definition</strong>.
          </li>
          <li>
            Enter the object name <strong>ZI_PRODUCT</strong>.
          </li>
          <li>Enter a meaningful description.</li>
          <li>Select the transport request.</li>
          <li>Finish the wizard.</li>
        </ol>

        <p>
          ADT creates a new CDS Data Definition with a basic template ready for
          development.
        </p>
      </ContentSection>

      <ContentSection title="Building Our First CDS View Entity">
        <p>Replace the generated template with the following CDS definition.</p>

        <CodeBlock
          title="ZI_PRODUCT.ddls.asddls"
          language="ABAP CDS"
          code={`@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product'

define view entity ZI_PRODUCT
  as select from I_Product
{
  key Product,
      ProductType,
      BaseUnit,
      CreationDate
}`}
        />

        <p>
          Don't worry if some of these keywords are unfamiliar. In the next
          section, we'll break down every line of this CDS View Entity and
          understand exactly what it does.
        </p>
      </ContentSection>

      <ContentSection title="Understanding Every Line of the CDS View Entity">
        <p>
          Although our first CDS View Entity contains only a few lines of code,
          every statement has a specific purpose. Before creating more advanced
          CDS artifacts, it's important to understand what each keyword means.
        </p>

        <TableBlock
          title="Understanding the CDS Definition"
          headers={["Statement", "Purpose"]}
          rows={[
            [
              "@AccessControl.authorizationCheck",
              "Defines whether CDS access control (DCL) is evaluated.",
            ],
            ["@EndUserText.label", "Provides a business-friendly description."],
            ["define view entity", "Creates a modern CDS View Entity."],
            ["as select from", "Specifies the CDS data source."],
            ["key", "Defines the business key of the entity."],
          ]}
        />
      </ContentSection>

      <ContentSection title="Understanding the Header Annotations">
        <CodeBlock
          title="CDS Header"
          language="ABAP CDS"
          code={`@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product'`}
        />

        <p>
          The first two lines are CDS annotations. These annotations provide
          metadata that SAP tools use during design time and runtime.
        </p>

        <TableBlock
          title="Header Annotation Explanation"
          headers={["Annotation", "Explanation"]}
          rows={[
            [
              "@AccessControl.authorizationCheck",
              "Specifies whether DCL authorization checks should be performed.",
            ],
            [
              "@EndUserText.label",
              "Business description displayed in ADT and SAP applications.",
            ],
          ]}
        />

        <BestPractice>
          <p>
            During learning, using
            <strong> #NOT_REQUIRED</strong> keeps the focus on CDS development.
            In productive applications, authorization is normally implemented
            using DCL.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Understanding DEFINE VIEW ENTITY">
        <CodeBlock
          title="CDS Definition"
          language="ABAP CDS"
          code={`define view entity ZI_PRODUCT`}
        />

        <TableBlock
          title="Keyword Breakdown"
          headers={["Keyword", "Meaning"]}
          rows={[
            ["define", "Creates a new repository object."],
            ["view entity", "Creates the modern CDS View Entity object."],
            ["ZI_PRODUCT", "Technical name of the CDS View Entity."],
          ]}
        />

        <p>
          SAP recommends <strong>DEFINE VIEW ENTITY</strong> for all new
          developments because it removes the dependency on generated SQL Views
          and aligns with the ABAP Cloud programming model.
        </p>
      </ContentSection>

      <ContentSection title="Understanding the Data Source">
        <CodeBlock
          title="Selecting the Source"
          language="ABAP CDS"
          code={`as select from I_Product`}
        />

        <p>Every CDS View Entity requires one or more data sources.</p>

        <p>
          In this example, our source is the released SAP Interface View
          <strong> I_Product</strong>.
        </p>

        <TableBlock
          title="Why We Use Released Interface Views"
          headers={["Direct Table Access", "Released Interface View"]}
          rows={[
            [
              "Dependent on SAP internal implementation",
              "Stable released business API",
            ],
            ["Not recommended in ABAP Cloud", "Recommended by SAP"],
            ["Upgrade risk", "Upgrade-safe"],
            ["Table-centric", "Business-object centric"],
          ]}
        />
      </ContentSection>

      <ContentSection title="Understanding KEY">
        <CodeBlock
          title="Business Key"
          language="ABAP CDS"
          code={`key Product`}
        />

        <p>
          The <strong>KEY</strong> keyword identifies the business key of the
          CDS View Entity.
        </p>

        <p>
          For our Product Master, every product is uniquely identified by the
          field <strong>Product</strong>.
        </p>

        <p>
          Later, when we build RAP Business Objects, these key fields become the
          unique identifiers used for reading, updating, and deleting business
          instances.
        </p>
      </ContentSection>

      <ContentSection title="Activating the CDS View Entity">
        <p>
          After completing the implementation, save the object and activate it
          using <strong>Ctrl + F3</strong>.
        </p>

        <p>
          If no syntax errors exist, the CDS View Entity becomes immediately
          available for consumption.
        </p>

        <OutputPreview title="Expected Activation">
          {`Activation completed successfully.

Object:
ZI_PRODUCT

Status:
Active`}
        </OutputPreview>
      </ContentSection>

      <ContentSection title="Previewing the Data">
        <p>
          Once the CDS View Entity is activated, you can verify the result using
          the built-in Data Preview available in Eclipse ADT.
        </p>

        <ol>
          <li>Right-click the CDS View Entity.</li>
          <li>
            Select <strong>Open With → Data Preview</strong>.
          </li>
          <li>Execute the preview.</li>
        </ol>

        <OutputPreview title="Expected Data Preview">
          {`Product      ProductType     BaseUnit     CreationDate
--------------------------------------------------------
FG1000       FERT            EA           2024-01-05
RM2000       ROH             KG           2023-10-18
SF3000       HALB            EA           2024-03-21`}
        </OutputPreview>

        <p>
          The actual records displayed depend on the Product Master data
          available in your SAP system.
        </p>
      </ContentSection>

      <ContentSection title="Why CDS View Entities Are Preferred Over Open SQL">
        <p>
          Both Open SQL and CDS View Entities can retrieve data from SAP HANA,
          but they serve different purposes.
        </p>

        <p>
          Open SQL is intended for program-specific data access, whereas CDS
          View Entities create reusable business models that can be consumed by
          multiple SAP technologies.
        </p>

        <TableBlock
          title="Open SQL vs CDS View Entity"
          headers={["Capability", "Open SQL", "CDS View Entity"]}
          rows={[
            ["Reusable Data Model", "No", "Yes"],
            ["Business Semantics", "No", "Yes"],
            ["Annotations", "No", "Yes"],
            ["Associations", "No", "Yes"],
            ["RAP Compatible", "Indirect", "Yes"],
            ["OData Exposure", "No", "Yes"],
            ["Embedded Analytics", "No", "Yes"],
          ]}
        />
      </ContentSection>

      <BestPractice>
        <p>
          <strong>SAP Best Practices</strong>
        </p>

        <ul>
          <li>
            Always create new CDS artifacts using{" "}
            <strong>DEFINE VIEW ENTITY</strong>.
          </li>
          <li>
            Consume released Interface Views (<strong>I_*</strong>) instead of
            SAP database tables.
          </li>
          <li>Use meaningful business-oriented names for CDS View Entities.</li>
          <li>
            Keep CDS View Entities reusable rather than application-specific.
          </li>
          <li>
            Activate frequently while developing to catch syntax errors early.
          </li>
        </ul>
      </BestPractice>

      <CommonMistakes
        items={[
          "Using DEFINE VIEW instead of DEFINE VIEW ENTITY for new developments.",
          "Reading SAP tables directly instead of released Interface Views.",
          "Forgetting to define business key fields using the KEY keyword.",
          "Using inconsistent naming conventions.",
          "Ignoring activation warnings and syntax errors.",
        ]}
      />

      <RealWorldExample title="Real Project Scenario">
        <p>
          Imagine your organization is building a Product Management solution.
        </p>

        <p>
          Instead of writing multiple Open SQL statements across different
          applications, the development team creates a reusable CDS View Entity
          named <strong>ZI_PRODUCT</strong>.
        </p>

        <p>The same CDS View Entity can then be consumed by:</p>

        <ul>
          <li>RAP Business Objects</li>
          <li>Fiori Elements Applications</li>
          <li>OData Services</li>
          <li>Analytical Reports</li>
          <li>External APIs</li>
        </ul>

        <p>
          This approach centralizes the business model, eliminates duplicated
          logic, and simplifies long-term maintenance.
        </p>
      </RealWorldExample>

      <ArchitectNote>
        <strong>Architect Insight</strong>
        <br />
        <br />
        One of the biggest mindset changes in ABAP Cloud development is moving
        away from table-centric programming.
        <br />
        <br />
        Modern SAP development is based on business entities rather than
        physical database tables.
        <br />
        <br />
        Instead of asking <em>"Which table contains this data?"</em>,
        experienced developers ask
        <em>"Which released business entity provides this data?"</em>
        <br />
        <br />
        This approach aligns your applications with SAP's Clean Core strategy
        and ensures upgrade-safe extensions.
      </ArchitectNote>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What is a CDS View Entity?"
          answer="A CDS View Entity is SAP's strategic data modeling object used to define reusable business entities that can be consumed by RAP, Fiori, OData, analytics, and other SAP technologies."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why should new developments use DEFINE VIEW ENTITY instead of DEFINE VIEW?"
          answer="DEFINE VIEW ENTITY removes the dependency on generated SQL Views, simplifies the repository model, improves activation performance, and is SAP's recommended syntax for ABAP Cloud development."
        />

        <InterviewQuestion
          level="Architect"
          question="Why are released Interface Views preferred over direct table access?"
          answer="Released Interface Views provide stable, upgrade-safe business APIs aligned with SAP's Clean Core strategy. Direct table access couples applications to SAP's internal implementation and is discouraged in ABAP Cloud."
        />
      </ContentSection>

      <KeyTakeaway>
        <p>A CDS View Entity is the foundation of modern SAP development.</p>

        <p>
          In this lesson, you created your first CDS View Entity using a
          released SAP Interface View, understood the purpose of each keyword,
          activated the object, and previewed the resulting data.
        </p>

        <p>
          This CDS View Entity will continue to evolve throughout this course.
          In the next lesson, we will explore{" "}
          <strong>ABAP CDS Built-in Data Types</strong>, which form the basis
          for expressions, calculations, and advanced topics such as CAST.
        </p>
      </KeyTakeaway>

      <PrevNext
        prevTitle="CDS View Entity"
        prevHref="/tutorials/rap/cds-view-entity"
        nextTitle="Business Semantic Data Elements"
        nextHref="/tutorials/rap/cds-view-entity/business-semantic-data-elements"
      />
    </TutorialLayout>
  );
}
