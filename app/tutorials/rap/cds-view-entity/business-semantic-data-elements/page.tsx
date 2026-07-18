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

export default function Page() {
  return (
    <TutorialLayout
      title="Business Semantic Data Elements in ABAP CDS"
      category="CDS View Entity"
      duration="25 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      <ContentSection title="Why SAP Provides Business Semantic Data Elements">
        <p>
          As someone working on SAP S/4HANA Public Cloud or ABAP Cloud, one of
          the biggest improvements you can make to your CDS models is choosing
          the correct data type.
        </p>

        <p>
          While generic built-in types such as
          <strong> abap.char()</strong>,<strong> abap.numc()</strong> and
          <strong> abap.dec()</strong> are available, SAP also provides hundreds
          of business semantic data elements that already represent real-world
          business concepts.
        </p>

        <p>
          Using these semantic data elements makes your CDS View Entities easier
          to understand, improves consistency across applications, and aligns
          your development with SAP standards.
        </p>

        <ImageBlock
          priority
          src="/images/rap/cds-view-entity/business data types (1).webp"
          alt="Business Semantic Data Elements"
          caption="SAP semantic data elements represent business concepts such as Material, Company Code, Currency, Plant, and Customer instead of generic character or numeric fields."
        />
      </ContentSection>

      <ContentSection title="Why Experienced SAP Architects Rarely Use Generic Types">
        <p>
          One of the easiest ways to distinguish an experienced SAP architect
          from a beginner is by looking at the data types used inside CDS View
          Entities.
        </p>

        <p>
          Beginners often define almost every field using generic built-in data
          types.
        </p>

        <CodeBlock
          title="Generic Data Types"
          language="ABAP CDS"
          code={`cast( Product as abap.char(40) )
cast( CompanyCode as abap.char(4) )
cast( Currency as abap.char(5) )`}
        />

        <p>
          Although technically correct, these definitions do not communicate the
          business meaning of the data.
        </p>

        <p>
          Experienced SAP developers instead prefer semantic data elements that
          already exist within the SAP data dictionary.
        </p>

        <CodeBlock
          title="Business Semantic Data Elements"
          language="ABAP CDS"
          code={`cast( Product as MATNR )
cast( CompanyCode as BUKRS )
cast( Currency as WAERS )`}
        />

        <ArchitectNote>
          <strong>Architect Insight</strong>
          <br />
          <br />
          Experienced SAP architects do not memorize thousands of SAP data
          elements.
          <br />
          <br />
          Instead, they memorize the most commonly used business semantic data
          elements and reuse them consistently across CDS View Entities, RAP
          Business Objects, APIs, and Fiori applications.
          <br />
          <br />
          This approach significantly improves readability, maintainability, and
          consistency across enterprise applications.
        </ArchitectNote>
      </ContentSection>

      <ContentSection title="Why Not Simply Use abap.char() Everywhere?">
        <p>Consider the following example.</p>

        <CodeBlock
          title="Using Generic Types"
          language="ABAP CDS"
          code={`cast( field1 as abap.char(4) )
cast( field2 as abap.char(4) )
cast( field3 as abap.char(4) )`}
        />

        <p>
          Looking only at the code, there is no indication of what each field
          actually represents.
        </p>

        <p>
          Each field could represent a Company Code, Plant, Currency, Sales
          Organization, Storage Location, or any other four-character business
          value.
        </p>

        <p>Now compare the same code using SAP semantic data elements.</p>

        <CodeBlock
          title="Using Business Semantic Types"
          language="ABAP CDS"
          code={`cast( CompanyCode as BUKRS )
cast( Plant as WERKS_D )
cast( Currency as WAERS )`}
        />

        <p>
          The business meaning is immediately obvious without requiring comments
          or additional documentation.
        </p>

        <BestPractice>
          <p>
            Whenever SAP already provides a released semantic data element for a
            business concept, prefer using it instead of a generic built-in data
            type.
          </p>

          <p>
            This improves readability and keeps your CDS models aligned with SAP
            standard business semantics.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="Advantages of Using Business Semantic Data Elements">
        <TableBlock
          title="Benefits"
          headers={["Benefit", "Description"]}
          rows={[
            [
              "Improved Readability",
              "Business meaning is immediately obvious.",
            ],
            [
              "Consistency",
              "Uses the same semantic types across RAP, CDS, APIs, and Fiori.",
            ],
            [
              "Better Maintenance",
              "Developers immediately understand the purpose of each field.",
            ],
            ["SAP Standard", "Follows SAP recommended development practices."],
            [
              "Reusable Models",
              "Encourages consistent data modeling across projects.",
            ],
          ]}
        />
      </ContentSection>

      <ContentSection title="1. Organizational Data Elements">
        <p>
          Organizational data elements represent the enterprise structure of an
          SAP system. They define how a business is organized into company
          codes, plants, purchasing organizations, sales organizations, and
          other operational units.
        </p>

        <p>
          These are among the most frequently used semantic data elements in
          almost every SAP implementation and appear extensively in CDS View
          Entities, RAP Business Objects, and standard SAP APIs.
        </p>

        <TableBlock
          title="Common Organizational Data Elements"
          headers={["Data Element", "Length", "Business Meaning", "Example"]}
          rows={[
            ["BUKRS", "CHAR(4)", "Company Code", "1000"],
            ["WERKS_D", "CHAR(4)", "Plant", "1100"],
            ["LGORT_D", "CHAR(4)", "Storage Location", "0001"],
            ["EKORG", "CHAR(4)", "Purchasing Organization", "P100"],
            ["EKGRP", "CHAR(3)", "Purchasing Group", "001"],
            ["VKORG", "CHAR(4)", "Sales Organization", "1000"],
            ["VTWEG", "CHAR(2)", "Distribution Channel", "10"],
            ["SPART", "CHAR(2)", "Division", "01"],
          ]}
        />

        <p>
          If you work on Sales, Purchasing, Inventory, Manufacturing, or Finance
          projects, you will encounter these semantic data elements almost every
          day.
        </p>
      </ContentSection>

      <ContentSection title="Using Organizational Data Elements in CDS">
        <CodeBlock
          title="Business Semantic Organizational Types"
          language="ABAP CDS"
          code={`cast( CompanyCode          as BUKRS   ) as CompanyCode,
cast( Plant                as WERKS_D ) as Plant,
cast( StorageLocation      as LGORT_D ) as StorageLocation,
cast( PurchasingOrg        as EKORG   ) as PurchasingOrganization,
cast( SalesOrganization    as VKORG   ) as SalesOrganization`}
        />

        <p>
          Notice how the CDS immediately communicates the business meaning of
          every field without requiring comments or additional documentation.
        </p>
      </ContentSection>

      <ContentSection title="2. Master Data Elements">
        <p>
          Master data represents the core business entities of an organization.
          These identifiers are reused throughout SAP business processes and are
          among the most important semantic data elements to remember.
        </p>

        <TableBlock
          title="Common Master Data Elements"
          headers={["Data Element", "Business Meaning", "Example"]}
          rows={[
            ["MATNR", "Material Number", "MAT-10001"],
            ["KUNNR", "Customer Number", "1000001"],
            ["LIFNR", "Supplier Number", "2000001"],
            ["Business Partner", "Business Partner Number", "1000123"],
          ]}
        />

        <p>
          Whether you build Procurement, Sales, Manufacturing, Finance, or RAP
          applications, these semantic types appear repeatedly across SAP
          business objects.
        </p>
      </ContentSection>

      <ContentSection title="Using Master Data Elements">
        <CodeBlock
          title="Master Data Semantic Types"
          language="ABAP CDS"
          code={`cast( Product          as MATNR ) as Material,
cast( Customer         as KUNNR ) as Customer,
cast( Supplier         as LIFNR ) as Supplier`}
        />

        <RealWorldExample title="Purchase Order Application">
          <p>
            A Purchase Order application may display Supplier, Material, Plant,
            Company Code, Currency, and Quantity within a single CDS View
            Entity.
          </p>

          <p>
            Using SAP semantic data elements immediately tells every developer
            what each field represents without inspecting the underlying
            database structure.
          </p>
        </RealWorldExample>
      </ContentSection>

      <ContentSection title="3. Financial Data Elements">
        <p>
          Financial applications require standardized semantic types for
          currencies, amounts, and exchange rates. SAP provides dedicated data
          elements for these concepts instead of relying on generic decimal
          fields.
        </p>

        <TableBlock
          title="Common Financial Data Elements"
          headers={["Data Element", "Business Meaning", "Example"]}
          rows={[
            ["WAERS", "Currency", "INR"],
            ["WRBTR", "Amount in Document Currency", "12,500.50"],
            ["DMBTR", "Amount in Local Currency", "10,000.00"],
            ["KURSF", "Exchange Rate", "89.2354"],
          ]}
        />

        <p>
          These semantic types become especially important when working with
          currency conversion functions, analytical CDS Views, and financial
          reporting.
        </p>
      </ContentSection>

      <ContentSection title="Using Financial Data Elements">
        <CodeBlock
          title="Financial Semantic Types"
          language="ABAP CDS"
          code={`cast( TransactionCurrency as WAERS ) as Currency,
cast( NetAmount            as WRBTR ) as NetAmount,
cast( ExchangeRate         as KURSF ) as ExchangeRate`}
        />

        <BestPractice>
          <p>
            Remember that semantic data elements do not perform currency or unit
            conversion.
          </p>

          <p>
            Currency conversion should always be implemented using the CDS
            <strong> CURRENCY_CONVERSION()</strong> function, while unit
            conversion should use
            <strong> UNIT_CONVERSION()</strong>.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="4. Quantity and Unit Data Elements">
        <p>
          Quantity fields are almost always associated with a Unit of Measure.
          SAP provides dedicated semantic data elements for both quantities and
          units to ensure consistency across logistics, manufacturing,
          inventory, and procurement applications.
        </p>

        <TableBlock
          title="Common Quantity and Unit Data Elements"
          headers={["Data Element", "Business Meaning", "Example"]}
          rows={[
            ["MEINS", "Base Unit", "KG"],
            ["VRKME", "Sales Unit", "PCS"],
            ["BSTME", "Purchase Order Unit", "BOX"],
            ["MENGE_D", "Quantity", "250.500"],
          ]}
        />

        <CodeBlock
          title="Quantity Semantic Types"
          language="ABAP CDS"
          code={`cast( BaseUnit        as MEINS   ) as BaseUnit,
cast( SalesUnit       as VRKME   ) as SalesUnit,
cast( PurchaseUnit    as BSTME   ) as PurchaseUnit,
cast( Quantity        as MENGE_D ) as Quantity`}
        />

        <p>
          These semantic data elements are frequently used together with
          <strong> UNIT_CONVERSION()</strong> and quantity semantics in CDS View
          Entities.
        </p>
      </ContentSection>

      <ContentSection title="5. Date and Time Data Elements">
        <p>
          Almost every business application stores dates, times, or timestamps.
          SAP provides dedicated semantic types that clearly indicate the type
          of temporal information being stored.
        </p>

        <TableBlock
          title="Common Date and Time Data Elements"
          headers={["Data Element", "Business Meaning", "Example"]}
          rows={[
            ["DATS", "Date", "20260702"],
            ["TIMS", "Time", "143015"],
            ["TZNTSTMPS", "UTC Timestamp", "20260702143015"],
          ]}
        />

        <CodeBlock
          title="Date and Time Types"
          language="ABAP CDS"
          code={`cast( CreationDate      as DATS ) as CreationDate,
cast( CreationTime      as TIMS ) as CreationTime,
cast( LastChangedUTC    as TZNTSTMPS ) as LastChangedTimestamp`}
        />

        <p>
          These semantic types become particularly useful when working with CDS
          date functions, timestamp calculations, and RAP audit fields.
        </p>
      </ContentSection>

      <ContentSection title="6. Purchasing Data Elements">
        <p>
          SAP Purchasing applications use standardized semantic data elements
          for Purchase Orders and Purchase Requisitions.
        </p>

        <TableBlock
          title="Common Purchasing Data Elements"
          headers={["Data Element", "Business Meaning", "Example"]}
          rows={[
            ["EBELN", "Purchase Order", "4500001234"],
            ["EBELP", "Purchase Order Item", "00010"],
            ["BANFN", "Purchase Requisition", "1000000123"],
            ["BNFPO", "Purchase Requisition Item", "00010"],
          ]}
        />

        <CodeBlock
          title="Purchasing Types"
          language="ABAP CDS"
          code={`cast( PurchaseOrder      as EBELN ) as PurchaseOrder,
cast( PurchaseOrderItem  as EBELP ) as PurchaseOrderItem,
cast( PurchaseReq        as BANFN ) as PurchaseRequisition,
cast( PurchaseReqItem    as BNFPO ) as PurchaseRequisitionItem`}
        />
      </ContentSection>

      <ContentSection title="7. Sales Data Elements">
        <p>
          Sales and Distribution applications rely on semantic data elements
          representing Sales Orders, Billing Documents, and related business
          objects.
        </p>

        <TableBlock
          title="Common Sales Data Elements"
          headers={["Data Element", "Business Meaning", "Example"]}
          rows={[
            ["VBELN_VA", "Sales Order", "5000001234"],
            ["POSNR_VA", "Sales Order Item", "000010"],
            ["VBELN_VF", "Billing Document", "9000001234"],
          ]}
        />

        <CodeBlock
          title="Sales Semantic Types"
          language="ABAP CDS"
          code={`cast( SalesOrder       as VBELN_VA ) as SalesOrder,
cast( SalesOrderItem   as POSNR_VA ) as SalesOrderItem,
cast( BillingDocument  as VBELN_VF ) as BillingDocument`}
        />
      </ContentSection>

      <ContentSection title="Why Semantic Data Elements Improve CDS Models">
        <p>
          Semantic data elements communicate business meaning immediately.
          Developers reading the CDS View Entity can understand the purpose of a
          field without referring to technical documentation.
        </p>

        <TableBlock
          title="Generic Types vs Business Semantic Types"
          headers={["Generic Type", "Semantic Type", "Business Meaning"]}
          rows={[
            ["abap.char(4)", "BUKRS", "Company Code"],
            ["abap.char(4)", "WERKS_D", "Plant"],
            ["abap.char(5)", "WAERS", "Currency"],
            ["abap.char(18)", "MATNR", "Material"],
            ["abap.char(10)", "KUNNR", "Customer"],
            ["abap.char(10)", "LIFNR", "Supplier"],
          ]}
        />

        <BestPractice>
          <p>
            Before defining a generic built-in type, check whether SAP already
            provides a semantic data element representing the same business
            concept.
          </p>

          <p>
            Using standard semantic types produces cleaner CDS models and makes
            collaboration across development teams much easier.
          </p>
        </BestPractice>
      </ContentSection>

      <ContentSection title="8. Material Management Data Elements">
        <p>
          Material Management applications frequently use semantic data elements
          representing batches, valuation areas, and valuation types. These
          fields are commonly found in Inventory Management, Material Ledger,
          and Warehouse Management scenarios.
        </p>

        <TableBlock
          title="Common Material Management Data Elements"
          headers={["Data Element", "Business Meaning", "Example"]}
          rows={[
            ["CHARG_D", "Batch", "BATCH001"],
            ["BWKEY", "Valuation Area", "1000"],
            ["BWTAR_D", "Valuation Type", "RETAIL"],
          ]}
        />

        <CodeBlock
          title="Material Management Semantic Types"
          language="ABAP CDS"
          code={`cast( Batch           as CHARG_D ) as Batch,
cast( ValuationArea   as BWKEY   ) as ValuationArea,
cast( ValuationType   as BWTAR_D ) as ValuationType`}
        />
      </ContentSection>

      <ContentSection title="9. User Information Data Elements">
        <p>
          SAP also provides semantic types representing user-related
          information. These appear frequently in audit fields, workflow,
          approvals, and administrative applications.
        </p>

        <TableBlock
          title="Common User Information Data Elements"
          headers={["Data Element", "Business Meaning", "Example"]}
          rows={[
            ["SYUNAME", "User Name", "SHADAB"],
            ["MANDT", "Client", "100"],
          ]}
        />

        <CodeBlock
          title="User Information Types"
          language="ABAP CDS"
          code={`cast( CreatedBy as SYUNAME ) as CreatedBy,
cast( Client    as MANDT   ) as Client`}
        />
      </ContentSection>

      <ContentSection title="10. Generic SAP Semantic Types">
        <p>
          Besides business-specific data elements, SAP provides several generic
          semantic types that are reused throughout almost every SAP
          application.
        </p>

        <TableBlock
          title="Common Generic SAP Types"
          headers={["Data Element", "Business Meaning"]}
          rows={[
            ["BOOLEAN", "True / False"],
            ["XUBNAME", "SAP User Name"],
            ["LAND1", "Country"],
            ["SPRAS", "Language"],
            ["ADRNR", "Address Number"],
          ]}
        />

        <p>
          These semantic data elements are not tied to a specific business
          module but are shared across Finance, Sales, Purchasing, Logistics,
          and many other SAP applications.
        </p>
      </ContentSection>

      <ContentSection title="Using Semantic Data Elements with CAST">
        <p>
          One of the most common use cases for business semantic data elements
          is within <strong>CAST</strong> expressions.
        </p>

        <p>
          Instead of casting to a generic built-in type, developers often cast
          directly to the corresponding SAP semantic type.
        </p>

        <CodeBlock
          title="Using CAST with Semantic Data Elements"
          language="ABAP CDS"
          code={`cast( Product              as MATNR   ) as Material,
cast( CompanyCode          as BUKRS   ) as CompanyCode,
cast( Plant                as WERKS_D ) as Plant,
cast( Customer             as KUNNR   ) as Customer,
cast( Supplier             as LIFNR   ) as Supplier,
cast( Currency             as WAERS   ) as Currency,
cast( BaseUnit             as MEINS   ) as BaseUnit`}
        />

        <p>
          This approach improves readability while ensuring the CDS model uses
          SAP's standard business semantics.
        </p>
      </ContentSection>

      <ContentSection title="When Should You Use Semantic Data Elements?">
        <TableBlock
          title="Recommended Approach"
          headers={["Scenario", "Recommendation"]}
          rows={[
            [
              "SAP already provides a semantic data element",
              "Use the semantic data element",
            ],
            [
              "Business-specific SAP identifier",
              "Prefer semantic type over generic type",
            ],
            [
              "No suitable SAP semantic type exists",
              "Use an appropriate ABAP built-in type",
            ],
            [
              "Custom business field",
              "Use built-in type or custom data element",
            ],
          ]}
        />

        <BestPractice>
          <p>
            Treat semantic data elements as the default choice whenever SAP
            already provides one for the business concept you are modeling.
          </p>

          <p>
            Reserve generic built-in types such as
            <strong> abap.char()</strong> or
            <strong> abap.dec()</strong> for technical or custom fields where no
            suitable SAP semantic type exists.
          </p>
        </BestPractice>
      </ContentSection>

      <RealWorldExample title="Building a Purchase Order CDS View">
        <p>
          Consider a Purchase Order CDS View Entity containing the following
          fields:
        </p>

        <ul>
          <li>Purchase Order</li>
          <li>Company Code</li>
          <li>Plant</li>
          <li>Supplier</li>
          <li>Material</li>
          <li>Currency</li>
          <li>Quantity</li>
          <li>Base Unit</li>
        </ul>

        <p>
          Instead of declaring these using generic character and decimal types,
          an experienced developer immediately recognizes the appropriate SAP
          semantic data elements:
        </p>

        <CodeBlock
          title="Professional CDS Modeling"
          language="ABAP CDS"
          code={`EBELN
BUKRS
WERKS_D
LIFNR
MATNR
WAERS
MENGE_D
MEINS`}
        />

        <p>
          This is the modeling approach commonly used in SAP standard VDM views,
          released APIs, RAP Business Objects, and enterprise-grade CDS
          applications.
        </p>
      </RealWorldExample>

      <CommonMistakes
        items={[
          "Using generic abap.char() for every business field instead of SAP semantic data elements.",
          "Using MATNR, KUNNR, or WAERS without understanding their business meaning.",
          "Assuming semantic data elements automatically perform formatting or conversion.",
          "Confusing business semantic data elements with built-in ABAP CDS data types.",
          "Ignoring SAP standard semantic types and creating unnecessary custom definitions.",
        ]}
      />

      <ArchitectNote>
        <strong>Architect Insight</strong>
        <br />
        <br />
        One of the easiest ways to recognize an experienced SAP architect is by
        looking at the data types used inside CDS View Entities.
        <br />
        <br />
        Experienced developers rarely model business fields using generic
        <strong> abap.char()</strong> or <strong>abap.dec()</strong> unless
        absolutely necessary.
        <br />
        <br />
        Instead, they reuse SAP's standard semantic data elements because they
        clearly communicate business meaning, improve consistency across
        applications, and align CDS models with SAP's standard Virtual Data
        Model (VDM).
        <br />
        <br />
        This approach makes RAP Business Objects, Fiori applications, APIs, and
        CDS View Entities much easier to understand and maintain.
      </ArchitectNote>

      <ContentSection title="Interview Questions">
        <InterviewQuestion
          level="Beginner"
          question="What is a business semantic data element?"
          answer="A business semantic data element is a predefined SAP data element that represents a specific business concept such as Company Code, Material, Customer, Currency, or Plant instead of using a generic built-in data type."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why should you prefer MATNR over abap.char(18)?"
          answer="MATNR immediately communicates that the field represents a Material Number. Using semantic data elements improves readability, consistency, and aligns the CDS model with SAP standard business semantics."
        />

        <InterviewQuestion
          level="Architect"
          question="When should generic built-in types be used instead of SAP semantic data elements?"
          answer="Generic built-in types should be used only when SAP does not provide an appropriate semantic data element or when modeling purely technical or custom application fields. Business concepts should normally use SAP semantic data elements."
        />
      </ContentSection>

      <ContentSection title="Watch the Complete ADT Walkthrough">
        <p>Prefer learning by watching?</p>

        <p>
          This lesson is accompanied by a complete step-by-step implementation
          in Eclipse ADT. The video uses the same examples, naming conventions,
          and CDS code demonstrated throughout this tutorial.
        </p>

        {/* TODO:
            Replace this section with your YouTube component.

            Video Title:
            SAP Business Semantic Data Elements in CDS View Entities

            Suggested Video Length:
            8-10 Minutes
        */}
      </ContentSection>

      <KeyTakeaway>
        <p>
          SAP provides hundreds of predefined semantic data elements that
          represent real business concepts such as Material, Company Code,
          Customer, Supplier, Currency, Plant, and Quantity.
        </p>

        <p>
          Instead of relying exclusively on generic built-in types like
          <strong> abap.char()</strong> or <strong>abap.dec()</strong>,
          experienced SAP developers choose semantic data elements whenever they
          model standard business information.
        </p>

        <p>
          This improves readability, promotes consistency across RAP
          applications, CDS View Entities, Fiori apps, and APIs, and aligns your
          development with SAP's standard business semantics.
        </p>

        <p>
          In the next lesson, we will explore
          <strong> ABAP CDS Built-in Data Types</strong> and understand how they
          form the foundation for expressions, calculations, and CAST
          operations.
        </p>
      </KeyTakeaway>

      <PrevNext
        prevTitle="Create Your First CDS View Entity"
        prevHref="/tutorials/rap/cds-view-entity/first-cds-view-entity"
        nextTitle="Understanding Built-in Data Types"
        nextHref="/tutorials/rap/cds-view-entity/built-in-data-types"
      />
    </TutorialLayout>
  );
}
