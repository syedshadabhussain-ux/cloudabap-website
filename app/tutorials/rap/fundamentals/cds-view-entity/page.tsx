import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import InfoBox from "@/components/tutorials/InfoBox";
import CodeBlock from "@/components/tutorials/CodeBlock";
import TableBlock from "@/components/tutorials/TableBlock";
import PrevNext from "@/components/tutorials/PrevNext";

export default function CDSViewEntityPage() {
  return (
    <TutorialLayout
      title="CDS View Entity"
      category="Fundamentals"
      duration="15 min read"
    >
      <ContentSection title="What is a CDS View Entity?">
        <p>
          A CDS View Entity is the foundation of every RAP Business Object. It
          defines the business data model that is later enhanced through
          Behavior Definitions and exposed through OData services.
        </p>

        <p>
          CDS View Entities are SAP's recommended approach for data modeling in
          ABAP Cloud and SAP S/4HANA Public Cloud. They replace classical CDS
          Views and provide a cleaner and more efficient development model.
        </p>
      </ContentSection>

      <InfoBox type="info" title="SAP Recommendation">
        SAP recommends using CDS View Entities instead of classic CDS Views for
        all new developments.
      </InfoBox>

      <ContentSection title="Why CDS View Entities?">
        <p>
          Before CDS View Entities, developers used classic CDS Views that
          required SQL View Names and additional metadata objects.
        </p>

        <p>
          CDS View Entities simplify development, improve activation performance
          and align better with SAP's Clean Core strategy.
        </p>
      </ContentSection>

      <TableBlock
        title="Classic CDS View vs CDS View Entity"
        headers={["Classic CDS View", "CDS View Entity"]}
        rows={[
          ["Requires SQL View Name", "No SQL View Name Required"],
          ["Older Technology", "Latest SAP Standard"],
          ["More Metadata Objects", "Simplified Architecture"],
          ["Not Recommended for New Development", "SAP Recommended"],
        ]}
      />

      <ContentSection title="Creating Your First CDS View Entity">
        <p>
          The following example creates a Root CDS View Entity representing
          employee master data.
        </p>

        <CodeBlock
          title="ZI_EMPLOYEE"
          code={`define root view entity ZI_EMPLOYEE
  as select from zemployee
{
  key employee_id      as EmployeeId,
      first_name       as FirstName,
      last_name        as LastName,
      department       as Department,
      email            as Email
}`}
        />
      </ContentSection>

      <ContentSection title="Understanding the Syntax">
        <p>
          Every keyword in the CDS definition serves a specific purpose within
          RAP architecture.
        </p>
      </ContentSection>

      <TableBlock
        title="CDS Syntax Breakdown"
        headers={["Keyword", "Purpose"]}
        rows={[
          ["define", "Starts CDS Definition"],
          ["root", "Main RAP Business Object"],
          ["view entity", "Creates CDS View Entity"],
          ["as select from", "Specifies Data Source"],
          ["key", "Primary Key Field"],
          ["alias", "Business Friendly Field Name"],
        ]}
      />

      <ImageBlock
        src="/images/rap/cdsview.png"
        alt="CDS View Entity Architecture"
        caption="Position of CDS View Entity in RAP Architecture"
      />

      <ContentSection title="Role of CDS View Entity in RAP">
        <p>
          The CDS View Entity forms the Data Model Layer of RAP. All business
          logic, service exposure and Fiori applications are built on top of
          this foundation.
        </p>

        <p>
          A well-designed CDS model significantly reduces future maintenance and
          simplifies RAP development.
        </p>
      </ContentSection>

      <TableBlock
        title="RAP Architecture Layers"
        headers={["Layer", "Object", "Purpose"]}
        rows={[
          ["Data Model", "CDS View Entity", "Business Data Model"],
          ["Behavior", "Behavior Definition", "Business Logic"],
          ["Implementation", "Behavior Implementation", "Custom Logic"],
          ["Service", "Service Definition", "Expose Business Objects"],
          ["Exposure", "Service Binding", "Publish OData Services"],
          ["UI", "Fiori Elements", "Generate Applications"],
        ]}
      />

      <InfoBox type="tip" title="Best Practice">
        Use meaningful business keys and design your CDS model while keeping
        future Associations, Compositions and Behavior Definitions in mind.
      </InfoBox>

      <InfoBox type="warning" title="Common Mistake">
        Avoid creating new RAP applications using classic CDS Views with SQL
        View Names. CDS View Entities should be the default choice.
      </InfoBox>

      <ContentSection title="Public Cloud Considerations">
        <p>
          In SAP S/4HANA Public Cloud, CDS View Entities should consume only
          released APIs and released CDS Views. Direct access to unreleased
          objects is not permitted.
        </p>

        <p>
          Following SAP's Clean Core principles ensures future compatibility and
          smooth upgrades.
        </p>
      </ContentSection>

      <InfoBox type="success" title="Learning Outcome">
        You can now explain what a CDS View Entity is, create a Root CDS View
        Entity and understand its role within RAP architecture.
      </InfoBox>

      <ContentSection title="Next Steps">
        <p>
          In the next lesson, we will learn Associations and understand how CDS
          View Entities are linked together to build business object
          relationships.
        </p>
      </ContentSection>

      <PrevNext
        prevTitle="Introduction to RAP"
        prevHref="/tutorials/rap/fundamentals/introduction-to-rap"
        nextTitle="Associations"
        nextHref="/tutorials/rap/fundamentals/associations"
      />
    </TutorialLayout>
  );
}
